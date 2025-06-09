const HashTag = require('../model/hashtags');

class HashtagRepository{
    async create(data){
          try {
              const tag=await HashTag.create(data);
              return tag;
          } catch (error) {
            console.log(error)
          }
    }
    
    async bulkCreate(data) {
          try {
              const resp = await HashTag.insertMany(data);
              return resp//data should be array of objects
          } catch (error) {
            
          }
    }

    // Updating a tweet by its ID and returning the updated document using { new: true } option in findByIdAndUpdate()
    async update(tweetId, data) {
        try {
            const tag = await HashTag.findByIdAndUpdate(tweetId, data, { new: true });
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
          try {
              const tag = await HashTag.findById(id);
              return tag;
          } catch (error) {
              console.log(error);
          }
    }
    
    
    async destroy(id) {
        try {
            const tag = await HashTag.findByIdAndRemove(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    
    // This code snippet queries the HashTag collection to find documents where the 'title' field matches any value in the 'titleList' array.
    // It uses the `.select()` method to include only the 'title' field in the result while excluding the '_id' field.
    async findByName(titleList) {
        try {
            const response = await HashTag.find({
                title: titleList
            });
            return response;
        } catch (error) {
            console.log(error)
        }
    }


    async destroyAll() {
        try {
            const res = await HashTag.deleteMany({});
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }
    
}

module.exports = HashtagRepository;