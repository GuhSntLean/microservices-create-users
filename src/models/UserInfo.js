const { Model, DataTypes } = require('sequelize')

class User extends Model{
    static init(connection){
        super.init({
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            email: DataTypes.STRING
        })
    }
}

module.exports = User