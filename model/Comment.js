const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: {
        type: String,
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Comment', CommentSchema);