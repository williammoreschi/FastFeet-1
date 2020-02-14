import Sequelize from 'sequelize';

import User from '../app/models/Users';
import Recipient from '../app/models/Recipients';
import File from '../app/models/Files';
import Delivery from '../app/models/Delivery';


import databaseConfig from '../config/database';

const models = [User, Recipient, File, Delivery];

class Database {
  constructor(){
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    
    models.map(model => model.init(this.connection));
  }

}

export default new Database();