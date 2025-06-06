const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
        max:[250,'Tweet cannot be more than 250 charecter']
    },
    hashTages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"hashtags"
        }
    ],
   
}, { timestamps: true });


const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
