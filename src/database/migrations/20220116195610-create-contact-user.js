"use strict";

const { DataTypes } = require("sequelize/dist");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contactUser", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
      },
      type_contact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("contactUser");
  },
};
