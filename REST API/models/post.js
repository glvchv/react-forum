const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true,
        minlength: 30
    },
    author: {
        type: "ObjectId",
        ref: 'User'
    },
    likes: [{
        type: 'ObjectId',
        ref: 'User'
    }],
    replies: [{
        type: 'ObjectId',
        ref: 'Reply'
    }],
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Post', PostSchema);