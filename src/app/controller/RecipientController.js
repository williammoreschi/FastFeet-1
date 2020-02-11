import Recipient from '../models/Recipients';
import User from '../models/Users';

import * as Yup from 'yup';

class ControllerRecipients {
  async store(req, res){
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      postal_code: Yup.number().required(),
    });

    if(! (await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation error' });
    };

    const checkIsAdministrator = await User.findOne({
      where: { id: req.userId, administrator: true }
    });

    if(!checkIsAdministrator){
      return res.status(401).json({ 
        error: 'Normally users can not create recipients'
      });
    }

    const { name, street, number, complement, state, city, postal_code } = 
    await Recipient.create(req.body);
    
    return res.json({
      name,
      street,
      number,
      complement,
      state,
      city,
      postal_code,
     });

  }

  async update(req, res) {
    return res.json({ ok: true });
  }

}

export default new ControllerRecipients();