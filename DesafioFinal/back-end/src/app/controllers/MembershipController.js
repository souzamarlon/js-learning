// import * as Yup from 'yup';

import { addMonths, parseISO, isBefore } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import Membership from '../models/Membership';
import Student from '../models/Student';
import Plan from '../models/Plan';

import MembershipMail from '../jobs/MembershipMail';

import Queue from '../../lib/Queue';

class MembershipController {
  async index(req, res) {
    const memberships = await Membership.findAll({
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title'],
        },
      ],
    });
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

    // TODO Validar se a data não é antes da data de hoje
    const actualDate = new Date();
    // const timeZone = 'America/Brasília'; //  'Europe/Paris';
    const dateTimeUTC = zonedTimeToUtc(actualDate, 'America/Brasília');

    if (isBefore(parseISO(start_date), dateTimeUTC)) {
      return res.status(400).json({ error: 'Insert actual date!' });
    }

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
      createdAt: dateTimeUTC,
    });

    await Queue.add(MembershipMail.key, {
      members,
      student: studentExist,
      plan: planExist,
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

    const actualDate = new Date();
    // const timeZone = 'America/Brasília'; //  'Europe/Paris';
    const dateTimeUTC = zonedTimeToUtc(actualDate, 'America/Brasília');

    if (isBefore(parseISO(start_date), dateTimeUTC)) {
      return res.status(400).json({ error: 'Insert actual date!' });
    }

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
        id: req.params.id,
      },
    });
    const memberDeleted = await memberRemove.destroy();

    return res.json(memberDeleted);
  }
}

export default new MembershipController();
