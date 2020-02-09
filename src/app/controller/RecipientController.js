import Recipient from '../models/Recipients';
import * as Yup from 'yup';

class ControllerRecipients {
  async store(req, res){
    const schema = Yup.object().shape({
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

    const { id, street, number, complement, state, city, postal_code } = 
    await Recipient.create(req.body);
    
    return res.json({ 
      id,
      street,
      number,
      complement,
      state,
      city,
      postal_code,
     });

  }

  async index(req, res) {
    
    return res.json({ ok: true });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }

}

export default new ControllerRecipients();