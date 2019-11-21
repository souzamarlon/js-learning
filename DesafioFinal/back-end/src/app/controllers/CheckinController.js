import * as Yup from 'yup';

import { startOfDay, endOfDay, parseISO, format, subDays } from 'date-fns';
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

    // Actual date format(value, "yyyy-MM-dd'T'HH:mm:ssxxx")
    const date = parseISO(2019 - 11 - 21);
    const actualDate = new Date();

    // Reducing 7 days from actual date
    // const less7days = subDays(actualDate, 7);
    const less7days = subDays(actualDate, 7);

    console.log(date);
    console.log(less7days);

    const createdAt = await Checkin.findAll({
      where: {
        student_id: id,
        createdAt: {
          [Op.between]: [startOfDay(date), endOfDay(actualDate)],
        },
      },
      // attributes: ['id', 'createdAt'],
    });

    // TODO
    // Reduzir a data para 7 dias e começar a contagem a partir desssa data e fazer um contador
    // Para validar se ele já tem 5 checkins nos ultimos 7 dias.
    console.log(createdAt);

    // console.log(createdAt.length);

    // const checkins = await Checkin.create({
    //   student_id: id,
    // });

    return res.json(createdAt);
  }

  // TODO - I still need to improve

  // async update(req, res) {}
}

export default new CheckinController();
