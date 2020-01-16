import * as Yup from 'yup';

import { Op } from 'sequelize';
import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const searchName = req.query.q;

    if (searchName === null || searchName === undefined) {
      const name = await Student.findAll();
      return res.json(name);
    }

    const name = await Student.findAll({
      where: {
        name: {
          [Op.iLike]: `${searchName}%`,
        },
      },
    });
    return res.json(name);
  }

  async index_mobile(req, res) {
    const { id } = req.params;

    const student_id = await Student.findByPk(id);

    return res.json(student_id);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const userExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res
        .status(400)
        .json({ error: 'This email already exist in our database!' });
    }

    const { id, name, email, idade, peso, altura } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      idade,
      peso,
      altura,
    });
  }

  async delete(req, res) {
    const memberRemove = await Student.findOne({
      where: {
        id: req.params.id,
      },
    });
    const memberDeleted = await memberRemove.destroy();

    return res.json(memberDeleted);
  }

  // TODO - I still need to improve

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email } = req.body;
    const studentDetails = await Student.findByPk(req.params.id);

    const studentExists = await Student.findOne({
      where: { email },
    });

    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exist!' });
    }

    const studentUpdate = await studentDetails.update(req.body);
    return res.json(studentUpdate);
  }
}

export default new StudentController();
