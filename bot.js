var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /(\s|^)(B|b)ot(\s|$)/;  botRegexTi = /(.*)(T|t)itan(.*)/;botRegexBi = /(.*)(B|b)itch(.*)/;botRegexBk = /(.*)(B|b)oss killer(.*)/;botRegexAr = /(.*)(A|a)rena cutoff(.*)/;botRegexPr = /(.*)(P|p)restige link(.*)/
  botRegexFu = /(.*)(F|f)uck (Y|y)ou(.*)/;botRegexAs = /(\s|^)(A|a)ss(\s|$)/;botRegexHg = /(.*)(G|g)raves(\s|$)/;
  var phraseArray = [ "#?",
                    "#wtf",
                    "#saymyname",
                    "#24msgs",
                    "#omv",
                    "#stop",
                    "#legend",
                    "#itemuseisn'trequired",
                    "#thatswhatshesaid",
                    "#here" ];
  var phrase = chooseRandom(phraseArray);
  var randomint = getRandomInt(1,10);
  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(phrase);
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
  else if(request.text && botRegexPr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/13oEg8HzEB11-il7o4mBDUpPx-s2hnPvRa1PSMgpxyYE/edit?usp=sharing");
    this.res.end();
  }  
  else if(request.text && botRegexFu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("#Me?? Fuq you!");
    this.res.end();
  } 
  else if(request.text && botRegexAs.test(request.text)) {
    this.res.writeHead(200);
    postMessage("#ahh");
    this.res.end();
  } 
  else if(request.text && botRegexHg.test(request.text)) {
      this.res.writeHead(200);
      postMessage(randomint);
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

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
