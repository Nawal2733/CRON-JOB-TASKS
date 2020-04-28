const mongoose = require('mongoose');

const User = new mongoose.Schema({
    
},{
    strict: false
});

module.exports = mongoose.model('user', User)