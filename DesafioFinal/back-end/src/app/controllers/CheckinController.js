import * as Yup from 'yup';

import { closestTo, parseISO } from 'date-fns';

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

    const createdAt = await Checkin.findAll({
      where: {
        student_id: id,
      },
      attributes: ['createdAt'],
    });

    const date = new Date();

    const check = closestTo(date, [createdAt[0], createdAt[1]]);

    // for (let c = 7; c >= 0; c++) {

    // if(createdAt)
    //   for (var i= 0; i <=)
    //   const dates = max(createdAt[0]);

    // }

    // TODO
    // Reduzir a data para 7 dias e começar a contagem a partir desssa data e fazer um contador
    // Para validar se ele já tem 5 checkins nos ultimos 7 dias.

    console.log(check);
    console.log(createdAt.length);

    // const checkins = await Checkin.create({
    //   student_id: id,
    // });

    return res.json(check);
  }

  // TODO - I still need to improve

  // async update(req, res) {}
}

export default new CheckinController();
