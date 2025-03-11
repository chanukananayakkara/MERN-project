const mongoose = require('mongoose') //because mongoose is allowing us to create models and schemas/tables in our database. MongoDB alone is schemaless database.


const Schema = mongoose.Schema //function to create a new schema

const workoutSchema = new Schema({ //creating a new schema for our workout schema and pass a structure of the schema like an object
    title: {
        type: String,
        required: true
        //this is how we define each of the field of the data in the schema
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }

    //as a whole this defines the structure of the document which we saved in the database
}, {timestamps: true})//this is the property that stores the details of the object like object created date, object updated date likewise.

module.exports = mongoose.model('Workout',workoutSchema) //created a model using the schema that created to work with the schema. It's created a collection of workouts in the database