import express, { urlencoded } from 'express';
import connect from './config/databases.js';

// import TweetRepository from './repository/tweet-repository.js';
// const tweetRepo = new TweetRepository();

import HashtagRepository from "./repository/hashtags-repository.js"
const HashtagRepo = new HashtagRepository();

import TweetService from "./service/tweet-service.js"
const tweetService = new TweetService();

import bodyParser from 'body-parser';
const app = express();

import { UserRepository,TweetRepository } from './repository/index.js';
import LikeService from './service/like-service.js'


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import apiRouteTweet from './routes/index.js'
app.use('/api', apiRouteTweet);

app.listen(3000, async () => {
    try {
        console.log("Server running at port 3000");
        await connect();
        console.log('Mongodb connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
    // const tweet = await model.create({
    //     content: "",
    //     userEmail:"a@b.com"
    // })
    // console.log(tweet);
    // tweet.comments.push({ content: 'first comment here' });
    // await tweet.save();
    // console.log(tweet);

    // const doc = await model.findById('67f5345cc52304b8e7b44507');
    // doc.content = "new Tweet with comment schema"
    // await doc.save();
    // console.log(doc);

    // const tweet = await tweetRepo.create({ content: 'new Tweet with comment schema' });
    // console.log(tweet);


    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);


    

    // console.log(tweet);

    // const data = await model.find({});
    // console.log(data);
    

    // const firstDoc = await model.findById('67f531392ff463fc7a1dcc65');
    // firstDoc.userEmail = "abc@gmail.com";
    // await firstDoc.save();
    // // console.log(firstDoc.contentWithEmail);


    // const allTweet = await tweetRepo.getAll(0, 8);
    // const HashtagRepository=require("./repository/hashtags-repository")
    // const HashtagRepo = new HashtagRepository();
    // console.log(allTweet[0].contentWithEmail);
    


    // console.log(tweet);


    // !creating hash tag db and populating it
    
    // const deleInfo = await tagRepo.destroyAll();
    // console.log(deleInfo);


    // await tagRepo.create([
    //     {
    //         title: 'Tread',
    //         tweets: []  
    //     },
    //     {
    //         title: 'Excited',
    //         tweets:[]
    //     },
    //     {
    //         title: 'Python',
    //         tweets:[]
    //     },
    //     {
    //         title: 'Python',
    //         tweets:[]
    //     },
    //     {
    //         title: 'Fun',
    //         tweets:[]
    //     },
    //     {
    //         titale: 'Career',
    //         tweets:[]
    //     }
    // ])
    
    // let response = await HashtagRepo.findByName(['Trend', 'Excited','Fun']);
    // console.log(response);//[ { title: 'Excited' }, { title: 'Fun' } ]
    
    // response = response.map(tags => tags.title);
    // console.log(response);//[ 'Excited', 'Fun' ]

    
    
    // creating new tweet to filter out the tags that are not present
    
    
    
    // Creating user data in database
    // const userRepository = new UserRepository();
    // const user = await  userRepository.create({
        
    //         email: 'xyz@gmail.com',   // also fix the domain typo
    //         password: '123',      // correct key spelling
    //         name: 'xyz'
          
          
    // })
    


    const tweetRepository = new TweetRepository();
    // const result = await tweetRepository.create({ content: "this is my #first tweet and i am #excited #enjoy #letsgo #doit" })
    // console.log(result);
    const tweets = await tweetRepository.getAll(0, 10);
    
    // const hashTag = await tweetService.create(tweets[0]);
    

    const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id,'Tweet',user.id);
    await likeService.toggleLike(tweets[0].id,'Tweet','6851e6278b4612895fa0a3e5');

})