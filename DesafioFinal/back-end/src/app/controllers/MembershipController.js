// import * as Yup from 'yup';

import { addMonths, parseISO } from 'date-fns';

import Membership from '../models/Membership';
import Student from '../models/Student';
import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const memberships = await Membership.findAll();
    return res.json(memberships);
  }

  async store(req, res) {
    const { student_id, plan_id, start_date } = req.body;

    const studentExist = await Student.findByPk(student_id);
    const planExist = await Plan.findByPk(plan_id);
    const isDuplicated = await Membership.findOne({
      where: {
        student_id,
      },
    });

    if (!studentExist) {
      return res.status(400).json({ error: 'Student does not exist!' });
    }

    if (isDuplicated) {
      return res.status(400).json({ error: 'Student already exist!' });
    }

    if (!planExist) {
      return res.status(400).json({ error: 'Plan does not exist!' });
    }
    console.log(planExist.price);

    const price = planExist.price * planExist.duration;
    const end_date = addMonths(parseISO(start_date), planExist.duration);

    const members = await Membership.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });

    return res.json(members);
  }

  // async update(req, res) {
  //   const planDetails = await Plan.findByPk(req.params.id);

  //   const { id, title, duration, price } = await planDetails.update(req.body);
  //   return res.json({
  //     id,
  //     title,
  //     duration,
  //     price,
  //   });
  // }

  // async delete(req, res) {
  //   const planRemove = await Plan.findByPk(req.params.id);

  //   const plan = await planRemove.destroy();

  //   return res.json(plan);
  // }
}

export default new PlanController();
