require('dotenv').config() //attach the environment objects to process.env object


const express = require('express')
const workoutRoutes = require('./routes/workouts')



//express app
const app = express() //creates the express app and stored in the app constant


//middleware to run each time a request occurs
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})



//creates a route for react to a request
app.get('/', (req, res) => { //responds to the get request
    // '/' means the localhost:3000
    res.json({mssg: 'Welcome to the app'})
})




//listen for requests
app.listen(process.env.PORT, () =>{ //listen for requests from this port
    //calling the process.env object environment variables inside it
    console.log('listening on port',process.env.PORT)
})