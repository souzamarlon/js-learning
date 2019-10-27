import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';
import Meetup from '../models/Meetup';

import File from '../models/File';

class MeetupController {
  async index(req, res) {
    // const id_user = req.userId;
    const meetups = await Meetup.findAll({
      where: {
        user_id: req.userId,
      },
      attributes: ['id', 'user_id', 'title', 'description', 'location', 'date'],
      include: [
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      image: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error:
          'Please make sure all required fields are filled out correctly. Validation fails!',
      });
    }
    const { title, description, location, image, date } = req.body;

    /**
     * Check if the inserted date is outdated.
     */

    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted!' });
    }

    const meetup = await Meetup.create({
      user_id: req.userId,
      title,
      description,
      location,
      image,
      date,
    });
    return res.json(meetup);
  }

  async update(req, res) {
    const { id, title, description, location, image, date } = req.body;
    const meet_update = await Meetup.findByPk(id);

    if (meet_update.user_id !== req.userId) {
      return res.status(401).json({
        error: 'You do not have authorization to update this Meetup.',
      });
    }
    /** TODO - Actual date (It is not Brazilian time ) */
    // const actualDate = new Date();
    // console.log(actualDate);

    const hourStart = startOfHour(meet_update.date);

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted!' });
    }

    const meetup = await meet_update.update({
      title,
      description,
      location,
      image,
      date,
    });
    return res.json(meetup);
  }

  async delete(req, res) {
    const meet_remove = await Meetup.findByPk(req.params.id);

    if (meet_remove.user_id !== req.userId) {
      return res.status(401).json({
        error: 'You do not have authorization to update this Meetup.',
      });
    }

    const meetup = await meet_remove.destroy();
    return res.json(meetup);
  }
}

export default new MeetupController();
