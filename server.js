const express = require("express");
// by creating a PORT variable, we are allowing the server to run regardless of the serving environment, We are giving it a fallback Port incase the environment does not work
const PORT = process.env.PORT || 3500;

// this sets up the server
const app = express();
// this connects the api and html routing functions to the server page
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const fs = require("fs")
const path = require("path")
// this makes the public folder available throughout the server, therefore allowing the assets folder to work with the html pages
app.use(express.static("public"))


// this parses the incoming string or array data
app.use(express.urlencoded({ extended: true }));



// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)




// determine which port to use
app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`)
})

