import * as Yup from 'yup';

import { closestTo, getDate } from 'date-fns';

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

    const listCheckins = await Checkin.findAll({
      where: {
        student_id: id,
      },
    });

    const date = new Date(getDate());

    const dates = closestTo(date, listCheckins);

    console.log(dates);

    // const checkins = await Checkin.create({
    //   student_id: id,
    // });

    return res.json(listCheckins);
  }

  // TODO - I still need to improve

  // async update(req, res) {}
}

export default new CheckinController();
