const Tweet = require('../models/tweet');

class TweetRepository {
    async create(data){
        try {
            let tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id){
        try {
            let tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async destory(data){
        try {
            let tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async update(id,data){
        try {
            let tweet = await Tweet.findByIdAndUpdate(id , data , {new : true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;