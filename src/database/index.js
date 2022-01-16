const Sequelize = require('sequelize')
const configConnection = require('../config/database')

const connection = new Sequelize(configConnection)

module.exports = connection