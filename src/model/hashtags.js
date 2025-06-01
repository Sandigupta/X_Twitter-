const mongoose = require('mongoose');
const Tweet = require('./tweet');

const hashtagSchema =new mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Tweet'
        }
    ]
}, { timestamps: true })

const HashTag = mongoose.model('HashTag', hashtagSchema);
module.exports = HashTag;