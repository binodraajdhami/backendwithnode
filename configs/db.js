const mongoose = require('mongoose');
const configs = require('./index');

(async function () {
    try {
        await mongoose.connect(configs.db.mongodb);
        console.log('Database connection success!');
    } catch (error) {
        console.log('Database connection failed');
    }

})()