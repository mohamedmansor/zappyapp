var config = require("./config.json")
var Slack = require('slack-node')

var apiToken = config.slack.apiToken

slack = new Slack(apiToken)

slack.api('channels.history',
  {
    channel: 'C89F8BSUV',
    count: 1
  }, function(err, response){
    var hot_word = response.messages[0].text
    if(hot_word === "go"){
      console.log(hot_word)
      var twitter = require('./twitter')
    }
    else{
      console.log("just normal chat... SKIP AD")
    }
})