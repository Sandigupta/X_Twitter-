import mongoose  from "mongoose";
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
    likes:[{
         type: mongoose.Schema.Types.ObjectId,
         ref:"Like"
    }]
   
}, { timestamps: true });


const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;
