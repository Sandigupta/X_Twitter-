const TweetRepository = require("../repository/tweet-repository");
const  HashTagRepository  = require("../repository/hashtags-repository");

class TweetService{
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashTagRepository = new HashTagRepository();
    }

    async create(data) {

        const content = data.content;
        let tag = content.match(/#[a-zA-Z0-9_]+/g);
        tag.map((element) => element.substring(1));
        console.log("current tags:",tag);
        const Tweet = await this.tweetRepository.create(data);
        console.log(Tweet);


        const existingTags = await this.hashTagRepository.findByName(tag);
        const existingTagTitles = existingTags.map((tag) => tag.title);
        console.log("All ready present tags:",existingTagTitles);//


        // filter the tags that are not present in the hashTag db
        let newTags = tag.filter(tag => !existingTagTitles.includes(tag));// newTags will be the array of strings=["Excited", "Fun", "Team"]
        console.log("the array of string of new hashtags that are not presents previously:", newTags);
        
        // here we are coveting the array of string proved by newTags to array of objects 
        // Map to object format for bulk creation
        newTags = newTags.map(tag => ({
            title: tag,
            tweets: [Tweet._id]
        }));
  
        console.log("New tags in array of object form so that we can create the new hash tage documents:", newTags);
        

        const response = await this.hashTagRepository.bulkCreate(newTags);//the newTags must be array of objects.[{title:'Excited', tweets:[]},{title:"Fun", tweets:[]},{},{}]
        console.log(response);



        // lets update the tweets columne of allready present tags in  hashtable document with the coresponding tweet id
        existingTags.forEach(tagDoc => {
        console.log("tagDoc:", tagDoc); // Add this line

        if (!tagDoc || !tagDoc._id) {
            console.warn("⚠️ Invalid tagDoc without _id:", tagDoc);
            return;
        }  

        if (!tagDoc.tweets) {
            tagDoc.tweets = []; // Initialize tweets as an empty array if undefined
        }
        tagDoc.tweets.push(Tweet._id);
        tagDoc.save(); // Async, but fire-and-forget unless you want to await all
        });


        // todo create hashtags and add here
        /**
         1. bulcreate in mongoose
         2. filter titale of hashtag based on multiple tags
         3. How to add tweet id inside all the hashtags
         */
        return Tweet;


    }
}

module.exports = TweetService;