require('dotenv').config() //attach the environment objects to process.env object


const express = require('express')
const mongoose = require('mongoose') //now we can use this mongoose object to connect with the database
const workoutRoutes = require('./routes/workouts')



//express app
const app = express() //creates the express app and stored in the app constant


//middleware to run each time a request occurs
app.use(express.json())
/* This is useful to access the passing data to the server using req object. (using POST request)
because this middleware check whether the coming request has an body, and if it has,
then it attaches the data in the body to req object */ 




app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})



//creates a route for react to a request
app.get('/', (req, res) => { //responds to the get request
    // '/' means the localhost:3000
    res.json({mssg: 'Welcome to the app'})
})

//in here this grabs all the routes attached to router, attaches all of them to express app and used them.
app.use('/api/workouts', workoutRoutes) //In here if we call /api/workouts then all the routes in the workoutRoutes file is enabled/connected to app file 
//according to the passing route, the appropriate function in the workRoutes route will fire


//connect to db
mongoose.connect(process.env.MONGO_URI) //this is a async request and it returns a promise
.then(() =>{
    //listen for requests
app.listen(process.env.PORT, () =>{ //listen for requests from this port
    //calling the process.env object environment variables inside it
    console.log('listening on port',process.env.PORT)
})
})
.catch((error) =>{
    console.log(error)
})



