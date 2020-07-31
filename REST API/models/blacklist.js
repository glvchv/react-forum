const mongoose = require('mongoose');

const BlackListSchema = new mongoose.Schema({
    token: {
        type: String
    }
});

module.exports = mongoose.model('BlackList', BlackListSchema);