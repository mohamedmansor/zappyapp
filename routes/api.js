var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tweet = require('../models/Tweet.js');


/* GET ALL Tweets. */

router.get('/', function(req, res, next){
  Tweet.find(function(err, tweets){
    if (err) return next(err)
    res.json(tweets)
  });
});

/* GET SINGLE Tweet BY ID */
router.get('/:id', function(req, res, next) {
  Tweet.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Tweet */
router.post('/', function(req, res, next) {
  Tweet.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
