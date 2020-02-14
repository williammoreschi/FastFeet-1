import Delivery from  '../models/Delivery';

/**
 * Por fazer
 */

class DeliveryController {
  async index(req, res){
    return res.json({ok: true});
  };

  async store(req, res){
    return res.json({ok: true});
  }

}

export default new DeliveryController();