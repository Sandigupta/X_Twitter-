import Tweet from '../model/tweet.js'
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository {
    constructor() {
        super(Tweet);
    }
    
    // async create(data) {
    //     try {
    //         const tweet = await new Tweet.create(data);
    //         return tweet;
    //     } catch (error) {
    //         // console.log(error);
    //         throw error;
    //     }
    // }
    

// Reason: The `populate` method is used here to replace the specified paths in the document (in this case, 'comments') with documents from other collections. 
// This is particularly useful for retrieving related data in a single query, allowing for a more efficient and organized data retrieval process.
// Unlike promises or plain objects, Mongoose's `populate` is specifically designed to work with Mongoose documents and their relationships.
    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({
                path: 'comments',
                populate: {
                    path: 'comments' // This populates the comments within the comments
                }
            }).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async find(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path: 'likes'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TweetRepository;