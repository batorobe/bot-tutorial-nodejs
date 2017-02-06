var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /(B|b)ot/;  botRegexTi = /(T|t)itan/;botRegexBi = /(B|b)itch/;botRegexBk = /(B|b)oss killer/
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("#here");
    this.res.end();
  }
  else if(request.text && botRegexTi.test(request.text)) {
    this.res.writeHead(200);
    postMessage("#hebackyet?");
    this.res.end();
  } 
  
  else if(request.text && botRegexBi.test(request.text)) {
    this.res.writeHead(200);
    postMessage("#thatbih");
    this.res.end();
  } 
  else if(request.text && botRegexBk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("#bosskillah");
    this.res.end();
  }  
  else if(request.text && botRegexAr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1sJtSVnjhhRNxpiuMR5uXrsTlrsXMjp9TNO7JHDXhtsk/htmlview?pli=1");
    this.res.end();
  } 
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
