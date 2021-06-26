import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/user";

class UserController {
  index(req: Request, res: Response) {
    return res.send({ userId: req.userId });
  }

  async searchUsers(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, username } = req.body;
    const findUser = await repository.findOne(
      { where: { email } } || { where: { username } }
    );
    return res.json({ username: findUser.username, email: findUser.email });
  }

  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, password, username } = req.body;
    const userExists = await repository.findOne({ where: { email } });
    if (userExists) {
      return res.sendStatus(409);
    }
    const user = repository.create({ email, password, username });
    await repository.save(user);
    return res.json(user);
  }
}

export default new UserController();
