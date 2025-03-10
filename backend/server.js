const express = require('express')



//express app
const app = express() //creates the express app and stored in the app constant

//creates a route for react to a request
app.get('/', (req, res) => { //responds to the get request
    // '/' means the localhost:3000
    res.json({mssg: 'Welcome to the app'})
})




//listen for requests
app.listen(3000, () =>{ //listen for requests from this port
    console.log('listening on port 3000')
})