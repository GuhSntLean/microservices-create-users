"use strict";

const { DataTypes } = require("sequelize/dist");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("userInfo", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
      },
      civil_state: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
      gender: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("userInfo");
  },
};
