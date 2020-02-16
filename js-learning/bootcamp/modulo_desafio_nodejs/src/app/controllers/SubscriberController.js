// import * as Yup from 'yup';
import { startOfHour, isBefore } from 'date-fns';
import Subscriber from '../models/Subscriber';
import Meetup from '../models/Meetup';
// import User from '../models/User';

class SubscriberController {
  async index(req, res) {
    const subscribers = await Subscriber.findAll({
      where: {
        user_id: req.userId,
      },
      attributes: ['id', 'user_id', 'meetup_id'],
    });

    return res.json(subscribers);
  }

  async store(req, res) {
    const { meetup_id } = req.body;

    const meetups = await Meetup.findOne({
      where: {
        id: meetup_id,
      },
      attributes: ['id', 'user_id', 'date'],
    });

    // console.log(checkDate.meetup_id);

    /**
     * Check if the inserted date is outdated.
     */
    const hourStart = startOfHour(meetups.date);

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'The meetup is outdated!' });
    }

    if (meetups.user_id === req.userId) {
      return res.status(400).json({ error: 'You are the meetup owner!' });
    }

    const checkDate = await Subscriber.findOne({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          required: true,
          where: {
            date: meetups.date,
          },
        },
      ],
    });

    if (checkDate) {
      return res
        .status(400)
        .json({ error: "Can't subscribe to two meetups at the same time" });
    }

    // if (meetups_user.date)
    const subscribers = await Subscriber.create({
      user_id: req.userId,
      meetup_id,
    });
    return res.json(subscribers);
  }
}

export default new SubscriberController();
