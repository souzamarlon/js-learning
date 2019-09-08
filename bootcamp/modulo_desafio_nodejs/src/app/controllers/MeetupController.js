import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Meetup from '../models/Meetup';
// import File from '../models/File';

class MeetupController {
  async index(req, res) {
    // const id_user = req.userId;
    const meetups = await Meetup.findAll({
      where: {
        user_id: req.userId,
      },
      attributes: ['id', 'title', 'description', 'location', 'date'],
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error:
          'Please make sure all required fields are filled out correctly. Validation fails!',
      });
    }
    const { title, description, location, date } = req.body;

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
      date,
    });
    return res.json(meetup);
  }

  async update(req, res) {
    const { id, title, description, location, date } = req.body;
    const meet_req = await Meetup.findByPk(id);

    const meetup = await meet_req.update({
      title,
      description,
      location,
      date,
    });
    return res.json(meetup);
  }
}

export default new MeetupController();
