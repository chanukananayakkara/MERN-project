const express = require('express')

const router = express.Router() //used for access the express app in this file

router.get('/', () => {}) //the above Router method creates a router object to access express app in this file







module.exports = router //Then require this exported router in the server.js file