const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 10
    },
    author: {
        type: 'ObjectId',
        ref: 'User',
    },
    date: {
        type: Date,
        required: true
    },
    toPost: {
        type: 'ObjectId',
        ref: 'Post'
    },
    likes: [{
        type: 'ObjectId',
        ref: 'User'
    }]
});

module.exports = mongoose.model('Reply', ReplySchema);