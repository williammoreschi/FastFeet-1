import { Model, Sequelize } from 'sequelize';

class Deliverys extends Model{
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        avatar_id: Sequelize.INTEGER,
        email:Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

      return this;
  }

  static associate(models){
    this.belongsTo(models.Files, { foreignKey: 'avatar_id' });
  }

}

export default Deliverys;
