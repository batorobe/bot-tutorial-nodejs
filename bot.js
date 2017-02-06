var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexArena = /(*)(A|a)arena cutoff(*)/;  botRegexAbassbot = /(*)(B|b)ot(*)/; botRegexTitan = /(*)(T|t)itan/
      botRegexBK=/(*)(B|b)oss (K|k)iller/;botRegexBI = /(*)(B|b)itch/; 
  if(request.text && botRegexArena.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1sJtSVnjhhRNxpiuMR5uXrsTlrsXMjp9TNO7JHDXhtsk/htmlview?pli=1");
    this.res.end();
  }
  else if(request.text && botRegexTitan.test(request.text)) {
    this.res.writeHead(200);
    postMessage("#ishebackyet?");
    this.res.end();
  } 
  else if(request.text && botRegexBK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("#bosskillah");
    this.res.end();
  } 
  else if(request.text && botRegexBI.test(request.text)) {
    this.res.writeHead(200);
    postMessage(/#thatbih/);
    this.res.end();
  }
  else if(request.text && botRegexKys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.wikihow.com/Tie-a-Noose");
    this.res.end();
  } 
  else if(request.text && botRegexSlam.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://pbs.twimg.com/profile_images/587294731471757313/ZpI5PfKq.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexDaf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i3.kym-cdn.com/photos/images/facebook/000/787/356/d6f.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexAbassbot.test(request.text)) {
    var phraseArray = [ "here",
                       "yes",
                       "?" ];
    function chooseRandom(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
    var phrase = chooseRandom(phraseArray);
  
    this.res.writeHead(200);
    postMessage(phraseArray);
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
