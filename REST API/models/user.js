const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 3,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    posts: [{
        type: 'ObjectId',
        ref: 'Post'
    }],
    avatarUrl: {
        type: String
    }
});

module.exports = mongoose.model('User', UserSchema);