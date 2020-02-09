import Recipient from '../models/Recipients';
import * as Yup from 'yup';

class ControllerRecipients {
  async store(req, res){
    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      postal_code: Yup.number().required(),
    });

    if(! (await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation error' });
    }
    return res.json({ ok: true });

  }

  async index(req, res) {
    
    return res.json({ ok: true });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }

}

export default new ControllerRecipients();