'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipients', {
      id:{
        autoIncrement: true,
        primarykey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      complement: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      postal_code: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('recipients');
  }
};
