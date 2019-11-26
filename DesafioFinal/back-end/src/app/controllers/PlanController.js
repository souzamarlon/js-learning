import * as Yup from 'yup';

import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const plans = await Plan.findAll();
    return res.json(plans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error:
          'Please make sure all required fields are filled out correctly. Validation fails!',
      });
    }
    const { id, title, duration, price } = await Plan.create(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error:
          'Please make sure all required fields are filled out correctly. Validation fails!',
      });
    }
    const planDetails = await Plan.findByPk(req.params.id);

    const { id, title, duration, price } = await planDetails.update(req.body);
    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async delete(req, res) {
    const planRemove = await Plan.findByPk(req.params.id);

    const plan = await planRemove.destroy();

    return res.json(plan);
  }
}

export default new PlanController();
