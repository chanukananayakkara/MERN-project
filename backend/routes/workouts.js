const express = require('express')
const Workout = require('../models/workoutModel') //workoutModel is required to create a new workout in the collection

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
router.post('/', async (req, res) =>{
    const {title, load, reps} = req.body //this means desctructure the body of the POST message and and take the fields specified by accessing the req property.

    try {
        const workout = await Workout.create({title, load, reps}) //create a new workout by calling the  create method on workoutModel in the collection
        res.status(200).json(workout) //return the created object using a Json file
    } catch (error) {
        res.status(400).json({error:error.message}) //if the creation is not succeed, then return the error as a json object
        
    }
    
})


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