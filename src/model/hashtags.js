import mongoose from 'mongoose';

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String, // The title of the hashtag, must be a string
        required: true, // This field is required
        unique: true // This field must be unique across all documents
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId, // Each tweet is referenced by its ObjectId
            ref: 'Tweet' // This indicates that the ObjectId refers to the Tweet model
        }
    ]
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

const HashTag = mongoose.model('HashTag', hashtagSchema);
export default HashTag;
