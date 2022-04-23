const express = require("express")
const PORT = process.env.PORT || 3500;

// this sets up the server
const app = express();
// const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const fs = require("fs")
const path = require("path")
app.use(express.static("public"))


// this parses the incoming string or array data
app.use(express.urlencoded({ extended: true }));

// app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

// parse incoming JSON data
app.use(express.json());




// determine which port to use
app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`)
})

