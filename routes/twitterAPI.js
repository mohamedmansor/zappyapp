var express = require('express');
var config = require("./config.json")
var mongoose = require('mongoose');
var Tweet = require('../models/Tweet.js');
var Twit = require('twit');

var router = express.Router();

var T = new Twit({
    consumer_key: config.twitter.consumer_key,
    consumer_secret:config.twitter.consumer_secret,
    access_token: config.twitter.access_token,
    access_token_secret:config.twitter.access_token_secret
})
var arr = [];
T.get('statuses/home_timeline', function(err, data, response, next){
    for(var i =0; i <= 5; i++){
        tweet_text = data[i].text;
        tweetToJson = {
            "text": tweet_text
        }
        // console.log(tweetToJson)
        arr.push(tweetToJson)
    }
    // console.log(arr)
})
var cat = new Tweet({text: "Please Work"})
// console.log(cat.text)
cat.save(function(err, cat){
    if (err) console.log(err);
    cat.text
})

Tweet.find(function(err, cat){
    if (err) console.log(err);
    console.log(cat.text)
})
