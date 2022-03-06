const routes = require('express').Router()

/**
 * @swagger
 * /:
 *  get:
 *    description: Initial screen
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/', (req, res) => {
    res.status(200).send(JSON.stringify({'home': 'read documentation'}))
})


module.exports = routes