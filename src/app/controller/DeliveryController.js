import Delivery from  '../models/Deliverys';
import File from '../models/Files';

import * as Yup from 'yup';

class DeliveryController {
  async store(req, res){
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      avatar_id: Yup.number(),
    });

    /**
     * Autentication for the required objects from the schema 
    **/

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    /**
     * Autentication by the email 
    **/

    const deliveryExist = await Delivery.findOne({ 
      where: { email: req.body.email }
    });

    if(deliveryExist) {
      return res.status(400).json({ error: 'Delivery already exist' });
    }

    const { id, name, email } = await Delivery.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async index(req, res) {
    const deliverys = await Delivery.findAll(
      console.log('Check deliverys routes'),
      {
      attributes: [ 'id', 'name', 'email', 'avatar_id' ],
      include: [
         {
         model: File,
         as: 'avatar',
         attributes: [ 'name', 'path', 'url' ],
        }
      ]
    });

    return res.json(deliverys);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    avatar_id: Yup.number().required(),
    });

    if(! (schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation error'});
    }

    const { email } = req.body;
    
    if(email !== delivery.email) {
      const deliveryExist = await Delivery.findOne({ where: { email }});
    
      if(deliveryExist) {
        return res.status(401).json({ error: 'email does not match with anyone'});
      }
    }
  }
}

export default new DeliveryController();