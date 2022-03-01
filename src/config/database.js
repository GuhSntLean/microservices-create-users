const database = {
    dialect: 'postgres',
    host: '127.0.0.1',
    username: 'docker',
    password: 'P@ssw0rd',
    database: 'datauser-microservices',
    define: {
        timestamps: true,
        underscored: true,
    },
}

module.exports = database