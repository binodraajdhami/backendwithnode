const express = require('express');
const app = express();
const configs = require('./configs');
const ejs = require('ejs');
const path = require('path');
const morgan = require('morgan');
require('./configs/db');

// setup view engine
app.set('view engine', ejs);
app.set('views', path.join(__dirname, 'views'));

// inbuilt middleware
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));

// import routes
const apiRoutes = require('./routes/indexRoutes');

// use middlwares
app.use('/api', apiRoutes);

// route not found
app.use(function (req, res, next) {
    res.json({
        msg: '404 | Route Not Found'
    });
});

// error handling middleware
app.use(function (err, req, res, next) {
    res.json({
        error: err | '400 Error Middlware'
    });
});

app.listen(configs.app.port, function (err, done) {
    if (err) {
        console.log('Server listening failed');
    } else {
        console.log('Server listening at port :', configs.app.port);
    }
});

