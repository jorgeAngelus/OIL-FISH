const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')


//settings
app.set('port',3000)
app.set('views',path.join(__dirname,'views'));
app.set('public',path.join(__dirname,'public'));

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/routes'));

//Static
app.use(express.static(path.join(__dirname,'public')));

//404
app.use((req,res,next)=> {
    res.status(404).send('404 Not Found');
})

module.exports = app;