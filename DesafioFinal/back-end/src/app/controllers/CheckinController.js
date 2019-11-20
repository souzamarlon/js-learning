import * as Yup from 'yup';

import { max, parseISO } from 'date-fns';

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

    const dates = max(createdAt[0]);

    // for (let c = 0; c <= 5; c++) {}

    console.log(dates);
    console.log(createdAt.length);

    // const checkins = await Checkin.create({
    //   student_id: id,
    // });

    return res.json(dates);
  }

  // TODO - I still need to improve

  // async update(req, res) {}
}

export default new CheckinController();
