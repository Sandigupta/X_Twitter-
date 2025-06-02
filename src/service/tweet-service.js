const { TweetRepository } = require("../repository/index");

class TweetRepository{
    constructor() {
        this.tweetRepository = new TweetRepository();
    }

    async create(data) {
        const content = data.content;
        const tag = content.match(/#[a-zA-Z0-9_]+/g);
        tag.map((element) => element.substring(1));
        console.log(tag);
        const Tweet = await TweetRepository.create(data);
        console.log(Tweet);
    }
}

module.exports = TweetRepository;