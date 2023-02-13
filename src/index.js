const express = require('express');
const bodyParser = require('body-parser');

const connect = require('./config/database');
const TweetRepository = require('./repository/index');
const Comment = require('./models/comment');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/tweets/:id' , async (req , res) => {
    try {
        console.log(req.query);
        const response = await Tweet.find({_id : req.params.id});
        return res.status(201).json({
            message : response,
            success : true,
            err : {}
        });
    } catch (error) {
       return res.status(500).json({
            err : error.errors.content.message,
            success : false,
            message : {}
        })
    }
})

app.listen(PORT , async () => {

    console.log(`Server started at port ${PORT}`);
    connect();
    console.log('Mongo Db Connected');
    const Repo = new TweetRepository();
    const tweets = await Repo.getAll(0,1);
    console.log(tweets[0].contentWithEmail);
    
    


})