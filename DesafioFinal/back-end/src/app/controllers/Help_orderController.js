// import { startOfDay, endOfDay, subDays } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import Help_order from '../models/Help_order';
import Student from '../models/Student';

import HelpOrderMail from '../jobs/HelpOrderMail';

import Queue from '../../lib/Queue';

class Help_orderController {
  async store(req, res) {
    const student_id = req.params.id;
    const { question } = req.body;
    const helpOrder = Help_order.create({ student_id, question });

    return res.json(helpOrder);
  }

  async update(req, res) {
    const { id } = req.params;

    const studentQuestion = await Help_order.findByPk(id);
    const { name, email } = await Student.findOne({
      where: { id: studentQuestion.student_id },
      attributes: ['name', 'email'],
    });
    const { answer } = req.body;
    const actualDate = new Date();
    // const timeZone = 'America/Brasília'; //  'Europe/Paris';
    const dateTimeUTC = zonedTimeToUtc(actualDate, 'America/Brasília');

    const helpOrder = await studentQuestion.update({
      answer,
      answer_at: dateTimeUTC,
    });

    await Queue.add(HelpOrderMail.key, {
      name,
      email,
      question: studentQuestion.question,
      answer,
    });

    return res.json(helpOrder);
  }
}

export default new Help_orderController();
