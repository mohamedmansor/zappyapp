var express = require('express');
var config = require("./config.json")
var mongoose = require('mongoose');
var Tweet = require('../models/Tweet.js');
var Twit = require('twit');

// var router = express.Router();

// var T = new Twit({
//     consumer_key: config.twitter.consumer_key,
//     consumer_secret:config.twitter.consumer_secret,
//     access_token: config.twitter.access_token,
//     access_token_secret:config.twitter.access_token_secret
// })


var awsome_instance = new Tweet({text: "awsome"});

//save instance
var t = {"text": "try from script"};
var small = new Tweet(t);
small.save(function(err){
    if (err) throw err
})


// var tweetModel = new Tweet({
//     text: "Let's try to save data."
// });
// tweetModel.save(function(err, objectSaved){
//     if(err) console.log(err);
//     console.log(objectSaved)
//     console.log('saved')
// })

// console.log(tweetModel.text)
// Tweet.find({},function(err, data){
//     if (err) console.log(err);
//     console.log('saved..!')
//     console.log(data)
// })

// var arr = [];
// T.get('statuses/home_timeline', function(err, data, response, next){
//     for(var i =0; i <= 5; i++){
//         tweet_text = data[i].text;
//         tweetToJson = {
//             "text": tweet_text
//         }
//         // console.log(tweetToJson)
//         arr.push(tweetToJson)
//     }
//     // console.log(arr)
// })
// var cat = new Tweet({text: "Please Work"})
// // console.log(cat.text) 
// cat.save(function(err, cat){
//     if (err) console.log(err);
//     cat.text
// })

// Tweet.find(function(err, cat){
//     if (err) console.log(err);
//     console.log(cat.text)
// })
