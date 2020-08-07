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
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);