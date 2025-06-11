import TweetService from '../service/tweet-service.js';
const tweetService = new TweetService();

/**
 * 
 * The issue is that the export default syntax is incorrect; it should be used with a 
 * function declaration or expression directly. To fix this, you should change the export 
 * statement to correctly export the function.
 */
export const createTweet = async (req, res) => {
  try {
      const response = await tweetService.create(req.body);
      return res.status(201).json({
          success: true,
          message: "Sucessesfully create the the tweet",
          data: response,
          error:{}
      })
  } catch (error) {
      return res.status(500).json({
        success: false,
          message: "not able to create the tweet",
          data: {},
          error:error.message
      })
      
  }
       
}

