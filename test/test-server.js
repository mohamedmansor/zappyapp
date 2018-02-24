var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../app');
var Tweet = require('../models/Tweet');

var should = chai.should();
chai.use(chaiHttp);

describe('Tweets', function(){
    it('should list all tweets on /tweets', function(done){
        chai.request(server)
        .get('/tweet')
        .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body[0].should.have.property('_id');
            res.body[0].should.have.property('text');
            res.body[0].text.should.equal('Hello from terminal')
            done();
        });
    });
    it('should add a single tweet text', function(done){
        chai.request(server)
        .post('/tweet')
        .send({'text': 'testing post function'})
        .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object')
            res.body.should.have.property('text');
            res.body.should.have.property('_id');
            res.body.should.be.a('object');
            res.body.text.should.equal('testing post function');
            done();

        });
    });
});