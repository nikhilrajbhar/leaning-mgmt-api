const mongoose = require('mongoose');

const users = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    enrolledCourses: {
        type: Array
    }

});

module.exports = mongoose.models.users || mongoose.model('users', users); 