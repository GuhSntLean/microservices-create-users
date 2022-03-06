const express = require('express')
const router = express.Router() 

router.get('/', (req, res) => {
    res.send(JSON.stringify({'home': 'read documentation'}))
})


module.exports = router