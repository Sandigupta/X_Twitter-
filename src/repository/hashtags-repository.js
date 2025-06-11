import HashTag from '../model/hashtags.js';

class HashtagRepository {
    async create(data) {
        try {
            const tag = await HashTag.create(data);
            return tag;
        } catch (error) {
            console.error(error);
        }
    }

    async bulkCreate(data) {
        try {
            const resp = await HashTag.insertMany(data);
            return resp; // data should be an array of objects
        } catch (error) {
            console.error(error);
        }
    }

    async update(tweetId, data) {
        try {
            const tag = await HashTag.findByIdAndUpdate(tweetId, data, { new: true });
            return tag;
        } catch (error) {
            console.error(error);
        }
    }

    async get(id) {
        try {
            const tag = await HashTag.findById(id);
            return tag;
        } catch (error) {
            console.error(error);
        }
    }

    async destroy(id) {
        try {
            const tag = await HashTag.findByIdAndRemove(id);
            return tag;
        } catch (error) {
            console.error(error);
        }
    }

    async findByName(titleList) {
        try {
            const response = await HashTag.find({
                title: titleList
            });
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async destroyAll() {
        try {
            const res = await HashTag.deleteMany({});
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }
}

export default HashtagRepository;
