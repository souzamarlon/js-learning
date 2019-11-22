import * as Yup from 'yup';

import { startOfDay, endOfDay, subDays } from 'date-fns';
import { Op } from 'sequelize';

import Checkin from '../models/Checkin';

class CheckinController {
  async index(req, res) {
    const listCheckins = await Checkin.findAll({
      where: {
        student_id: req.params.id,
      },
    });
    return res.json(listCheckins);
  }

  async store(req, res) {
    const { id } = req.params;

    // TODO
    // Reduzir a data para 7 dias e começar a contagem a partir desssa data e fazer um contador
    // Para validar se ele já tem 5 checkins nos ultimos 7 dias.

    // Actual date
    const actualDate = new Date();
    const weekDay = actualDate.getDay();

    // Reducing 7 days from actual date
    // const less7days = subDays(actualDate, 7);

    const less7days = subDays(actualDate, weekDay);

    console.log(weekDay);

    const createdAt = await Checkin.findAll({
      where: {
        student_id: id,
        createdAt: {
          [Op.between]: [startOfDay(less7days), endOfDay(actualDate)],
        },
      },
      attributes: ['id', 'createdAt'],
    });

    if (createdAt.length >= 5) {
      return res
        .status(400)
        .json({ error: 'Você já realizou 5 checkins em um período de 7 dias' });
    }

    const checkins = await Checkin.create({
      student_id: id,
    });

    return res.json(checkins);
  }
}

export default new CheckinController();
