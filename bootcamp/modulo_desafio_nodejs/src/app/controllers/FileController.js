import File from '../models/File';

class FileController {
  async index(req, res) {
    return res.json('Oi!');
  }

  async store(req, res) {
    const { originalname: name, filename: path } = req.File;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
