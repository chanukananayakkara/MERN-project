//functions created in this file will called in workouts.js routes file

const Workout = require('../models/workoutModel') //We mention this file in here because we need this file to work with the database

// get all workouts



//get a single workout



//create new workout
const createWorkout = async (req, res) =>{ //createWorkout is a object created to access the creating function and this is a async function with req and res parameters

    const {title, load, reps} = req.body //this means desctructure the body of the POST message and and take the fields specified by accessing the req property.


    //add document(workout) to db
    try {
        const workout = await Workout.create({title, load, reps}) //create a new workout by calling the  create method on workoutModel in the collection
        res.status(200).json(workout) //return the created object using a Json file
    } catch (error) {
        res.status(400).json({error:error.message}) //if the creation is not succeed, then return the error as a json object
        
    }
}


//delete a workout



//update a workout

module.exports = { //in here we can export the functions we created in this controller file.
    createWorkout

}