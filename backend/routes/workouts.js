const express = require('express')

const router = express.Router() //used for access the express app in this file
//the above Router method creates a router object to access express app in this file


//GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
}) 

//GET a single workout
router.get('/:id', (req, res) =>{
    res.json({mssg: 'GET a single workout'})
})


//POST a new workout
router.post('/', (req, res) =>{
    res.json({mssg: 'POST a single workout'})
})


//DELETE a workout
router.delete('/:id', (req, res) =>{
    res.json({mssg: 'DELETE a single workout'})
})


//UPDATE a workout
router.patch('/:id', (req, res) =>{
    res.json({mssg: 'UPDATE a single workout'})
})










module.exports = router //Then require this exported router in the server.js file