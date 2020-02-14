import Delivery from  '../models/Deliverys';

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
}

export default new DeliveryController();