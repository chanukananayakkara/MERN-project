//functions created in this file will called in workouts.js routes file

const Workout = require('../models/workoutModel') //We mention this file in here because we need this file to work with the database
const mongoose = require('mongoose') //required to validate the object id is in mongoDB/mongoose type or not

// get all workouts
const getWorkout = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1}) //in here display all the workouts in the ascending order
    //in here we can pass a attribute of the workout object to find method to find a specific ojbect or set of objects

    res.status(200).json(workouts) //in here show the results of find method using the declared object 'workouts' as a json object

}


//get a single workout
const singleWorkout = async (req, res) => {
    const { id } = req.params //take id of the request using destructure the route parameter (req.params)

    if (!mongoose.Types.ObjectId.isValid(id)) { //this method checks the id that we got is a valid mongoose type id or not
        return res.status(404).json({error: 'No such workout'}) //in here we avoid the internal error by checking the id and return an json error with status. 
    }

    const foundWorkout = await Workout.findById(id) //using the workout model and destructured id from route parameter, find the relavant object.

    if(!foundWorkout){
        return res.status(400).json({error: 'No sucn workout'}) //return here because otherwise it take the error json string from the begining to the end of the function

    }
    res.status(200).json(foundWorkout)
}


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
const deleteWorkout = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const deletedWorkout = await Workout.findOneAndDelete({_id: id}) //in here, we match the value in the _id field in the mongoDB with the id we destructured from the route parameter and take the returning object/document to a constant named deletedWorkout

    if(!deletedWorkout){
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(deletedWorkout)
}


//update a workout
const updateWorkout = async (req, res) =>{

    const { id } = req.params
  
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }
    
    const updatedWorkout = await Workout.findOneAndUpdate({_id: id}, { //in here we spread the properties of the req.body object then updating the properties that we want to update
        ...req.body

        /*two parameters are passing to the findOneAndUpdate function, which are the id of the object we want to update and the
        properties to take to the updating process in the requesting object */ 
    })

    if(!updatedWorkout){
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(updatedWorkout)
}


module.exports = { //in here we can export the functions we created in this controller file.
    createWorkout,
    getWorkout,
    singleWorkout,
    deleteWorkout,
    updateWorkout

}