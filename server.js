require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
//Set Port\\
const PORT = process.env.PORT || 3001;

require('./config/database.js');

const app = express();

app.use(logger('dev'));
app.use(express.json());




//MIDDLEWARE\\

app.use(express.static(path.join(__dirname, 'build')));

//API ROUTES

//Catch all Route\\
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Backend on ${PORT}`)
});