const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/task2';

const mongodb = () => {
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Mongoose connected Successfully"))
    .catch(err => console.log(err))
}

module.exports = mongodb