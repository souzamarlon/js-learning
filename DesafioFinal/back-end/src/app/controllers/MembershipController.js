// import * as Yup from 'yup';

import { addMonths, parseISO } from 'date-fns';

import Membership from '../models/Membership';
import Student from '../models/Student';
import Plan from '../models/Plan';

import Mail from '../../lib/Mail';

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

    const price = planExist.price * planExist.duration;
    const end_date = addMonths(parseISO(start_date), planExist.duration);

    const members = await Membership.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });

    await Mail.sendMail({
      to: `${studentExist.name} <${studentExist.email}>`,
      subject: 'Matrículado com sucesso',
      text:
        'Você está matrículado na melhor academia do mundo, seja bem-vindo para GymPoint!',
    });

    return res.json(members);
  }

  async update(req, res) {
    const student_id = req.params.id;
    const { plan_id, start_date } = req.body;
    const memberDetails = await Membership.findOne({
      where: {
        student_id,
      },
    });

    const { price, duration } = await Plan.findByPk(plan_id);

    const totalPrice = price * duration;
    const end_date = addMonths(parseISO(start_date), duration);

    const memberUpdate = await memberDetails.update({
      plan_id,
      start_date,
      end_date,
      price: totalPrice,
    });

    return res.json(memberUpdate);
  }

  async delete(req, res) {
    const memberRemove = await Membership.findOne({
      where: {
        student_id: req.params.id,
      },
    });
    const memberDeleted = await memberRemove.destroy();

    return res.json(memberDeleted);
  }
}

export default new PlanController();
