const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema ({
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    content:
    {
        type: String, 
        required: true,
        minlength: [3, 'Content must be at least 3 characters long']
    },
    author: { 
        type: ObjectId, 
        ref: 'User' 
    },
    comments: [{
        type: ObjectId,
        ref: 'Comments'
    }]
}, {timestamp: true});

module.exports = mongoose.model('Article', ArticleSchema )