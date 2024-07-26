const express = require('express');

require("dotenv").config();

const db = require("./Connection/connection")

// initialize
const app = express();
const morgan = require("morgan")
const port = process.env.PORT;
const bodyParser = require('body-parser');

// route import
const UserRoute = require("./Route/userRoute");

// Server uses
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api', UserRoute);

// Server start index
app.get('/', (req,res) => {
    res.send("This is an ecommerce server")
})

app.listen(port, ()=> {
    console.log(`server get started at ${port}`)
})