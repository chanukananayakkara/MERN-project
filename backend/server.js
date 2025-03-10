const express = require('express')




const app = express() //creates the express app and stored in the app constant

//listen for requests

app.listen(3000, () =>{ //listen for requests from this port
    console.log('listening on port 3000')
})