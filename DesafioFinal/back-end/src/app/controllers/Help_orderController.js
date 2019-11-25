import Help_order from '../models/Help_order';

class Help_orderController {
  async store(req, res) {
    const student_id = req.params.id;
    const { question } = req.body;
    const helpOrder = Help_order.create({ student_id, question });

    return res.json(helpOrder);
  }
}

export default new Help_orderController();
