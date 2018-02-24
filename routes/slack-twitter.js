var express = require('express');
var config = require("./config.json")
var mongoose = require('mongoose');
var Tweet = require('../models/Tweet.js');
var Twit = require('twit');
var Slack = require('slack-node')

var apiToken = config.slack.apiToken
slack = new Slack(apiToken);

var T = new Twit({
    consumer_key: config.twitter.consumer_key,
    consumer_secret:config.twitter.consumer_secret,
    access_token: config.twitter.access_token,
    access_token_secret:config.twitter.access_token_secret
})

slack.api('channels.history', {
    channel: 'C89F8BSUV',
    count: 1,
    }, function(err, response){
        if (err) throw err;
        var text = response['messages'][0]['text'];
        if(text === 'go'){
        console.log('Activated');
        T.get('statuses/home_timeline', function(err, data, response, next){
            for(var i =0; i <= 5; i++){
                tweet_text = data[i].text;
                tweetToJson = {
                    "text": tweet_text
                }
                console.log(tweetToJson)
            }
            // console.log(arr)
        })
        // T.get('search/tweets', param, function(err, data, response){
        //     console.log(data.statuses[0].text);
        //     res.send(data.statuses[0].text);
        // });
        }
        else{
        console.log('Not the right message');
        }
    });