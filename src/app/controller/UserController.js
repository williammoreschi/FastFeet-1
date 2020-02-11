import User from '../models/Users';

import * as Yup from 'yup';

class UserController  {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
      administrator: Yup.boolean().default(false),
    });

    /**
     * Autentication for the required objects from the schema 
    **/

    if(!( await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation error'})
    }

    /**
     * Autentication by the email 
    **/

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

  async update(req, res){
    return res.json({ ok: true });
  }

}

export default new UserController();