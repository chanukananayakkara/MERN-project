const express = require('express')
const { //in here we use object because we have to pass multiple functions from the workoutController file
    createWorkout,
    getWorkout,
    singleWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
 
const router = express.Router() //used for access the express app in this file
//the above Router method creates a router object to access express app in this file


//GET all workouts
router.get('/', getWorkout) 

//GET a single workout
router.get('/:id', singleWorkout)


//POST a new workout
router.post('/', createWorkout) //calling the function created in the controller file when occuring the POST request


//DELETE a workout
router.delete('/:id', deleteWorkout)


//UPDATE a workout
router.patch('/:id', updateWorkout)

//these are different routes/ request handlers










module.exports = router //Then require this exported router in the server.js file