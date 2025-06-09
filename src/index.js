const express = require('express');
const app = express();

const connect = require('./config/databases');
const model = require('./model/tweet');
const Comment = require('./model/comment');
const tweetRepository=require('./repository/tweet-repository')
const tweetRepo = new tweetRepository();

app.listen(3000, async () => {
    console.log("Server running at port 3000");
    await connect();
    console.log('Mongodb connected');
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
    // const comment = await Comment.create({ content: 'new new comment' });
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);


    // const tweet = await tweetRepo.getWithComments('6831a34bede5082ed9fbcb44');
    // console.log(tweet);

    // const data = await model.find({});
    // console.log(data);
    

    // const firstDoc = await model.findById('67f531392ff463fc7a1dcc65');
    // firstDoc.userEmail = "abc@gmail.com";
    // await firstDoc.save();
    // // console.log(firstDoc.contentWithEmail);

    // const allTweet = await tweetRepo.getAll(0, 8);
    // console.log(allTweet[0].contentWithEmail);
    
    // const tweet = await tweetRepo.create({ content: "to check the hook" });
    // console.log(tweet);


    // !creating hash tag db and populating it
    const HashtagRepository=require("./repository/hashtags-repository")
    const HashtagRepo = new HashtagRepository();
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
    const TweetService=require("./service/tweet-service")
    const tweetService = new TweetService();
    const respons=await tweetService.create({content:"#tweet is working"})
     console.log(respons)
})