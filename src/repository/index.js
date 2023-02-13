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

    async getWithComments(id){
        try {
            let tweet = await Tweet.findById(id).populate({path: "comments"})
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

    async getAll(offset , limit){
        try {
            let tweets = await Tweet.find().skip(offset).limit(limit);
            return tweets;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;