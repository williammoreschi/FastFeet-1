import User from '../models/User';

class UserController  {
  async store(req, res) {
    const userExist =await User.findOne({ where: { email: req.body.email } });

    if(userExist){
      return res.status(400).json({ error: 'User Already exist'});
    }

    const { id, name, email, administrator } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      administrator,
    });
  }

}

export default new UserController();