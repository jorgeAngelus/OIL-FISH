const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('views',path.join(__dirname,'views'))

//Middlewares
app.use(express.urlencoded({extended: false}));
//Routes
app.use(require('./routes/index'));
//Static
app.use(express.static(path.join(__dirname,'public')));

//404
app.use((req,res,next)=> {
    res.status(404).send('404 Not Found');
})

module.exports = app;