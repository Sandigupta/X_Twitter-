import express, { urlencoded } from 'express';
import connect from './config/databases.js';

import TweetRepository from './repository/tweet-repository.js';
const tweetRepo = new TweetRepository();

import HashtagRepository from "./repository/hashtags-repository.js"
const HashtagRepo = new HashtagRepository();

import TweetService from "./service/tweet-service.js"
const tweetService = new TweetService();
import bodyParser from 'body-parser';
const app = express();

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
    
    
})