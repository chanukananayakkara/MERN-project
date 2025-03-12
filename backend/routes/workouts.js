const express = require('express')
const { //in here we use object because we have to pass multiple functions from the workoutController file
    createWorkout,
    getWorkout
} = require('../controllers/workoutController')
 
const router = express.Router() //used for access the express app in this file
//the above Router method creates a router object to access express app in this file


//GET all workouts
router.get('/', getWorkout) 

//GET a single workout
router.get('/:id', (req, res) =>{
    res.json({mssg: 'GET a single workout'})
})


//POST a new workout
router.post('/', createWorkout) //calling the function created in the controller file when occuring the POST request


//DELETE a workout
router.delete('/:id', (req, res) =>{
    res.json({mssg: 'DELETE a single workout'})
})


//UPDATE a workout
router.patch('/:id', (req, res) =>{
    res.json({mssg: 'UPDATE a single workout'})
})

//these are different routes/ request handlers










module.exports = router //Then require this exported router in the server.js file