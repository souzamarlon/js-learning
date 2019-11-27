import * as Yup from 'yup';

import { Op } from 'sequelize';
import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const searchName = req.query.q;
    const name = await Student.findAll({
      where: {
        name: {
          [Op.like]: `${searchName}%`,
        },
      },
    });
    return res.json(name);
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
    // const userExists = await Student.findOne({
    //   where: { email: req.body.email },
    // });

    // if (userExists) {
    //   return res.status(400).json({ error: 'User already exists!' });
    // }

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

  // TODO - I still need to improve

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email } = req.body;
    const user = await Student.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await Student.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists!' });
      }
    }

    const { id, name } = await user.update(req.body);
    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new StudentController();
