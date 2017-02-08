var HTTPS = require('https');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),

  botRegex = /(\s|^)(B|b)ot(\s|$)/;  botRegexTi = /(.*)(T|t)itan(.*)/;botRegexBi = /(.*)(B|b)itch(.*)/
  botRegexBk = /(.*)(B|b)oss kill(.*)/;botRegexAr = /(.*)(A|a)rena cutoff(.*)/;botRegexPr = /(.*)(P|p)restige link(.*)/;
  botRegexFu = /(.*)(F|f)uck (Y|y)ou(.*)/;botRegexHg = /Graves/;botRegexFf = /(.*)(B|b)(R|r)(A|a|U|u)(H|h)(.*)/;
  botRegexDo = /\/(D|d)onations/;botRegex6 = /\/(M|m)ap6$/;botRegex61 = /\/(M|m)ap6[.]1$/;botRegex62 = /\/(M|m)ap6[.]2$/;
  botRegex63 = /\/(M|m)ap6[.]3$/;

  var phraseArray = [ "#?",
                    "#wtf",
                    "#saymyname",
                    "#24msgs",
                    "#omv",
                    "#stop",
                    "#legend",
                    "#iamgroot",
                    "#titan??",
                    "#telomere",
                    "#here" ];
  var phrase = chooseRandom(phraseArray);
  var phraseArray2 = [ "#2fast",
                    "#2furious",
                    "#ask any racer. any real racer",
                    "#for those 10 seconds or less, I'm free",
                    "#i'll havae the tuna. no crust",
                    "#still a buster",
                    "#ejecto seato, cuz!",
                    "#too soon, junior",
                    "#it's a ho-asis in here, brah",
                    "#rideordie",
                    "#i never nar'd on nobody",
                    "#overnight parts from japan" ];
  var phrase2 = chooseRandom(phraseArray2);

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
  else if(request.text && botRegexHg.test(request.text)) {
    this.res.writeHead(200);
    if(Math.random() >= 0.9)
      postMessage("http://pix.iemoji.com/images/emoji/apple/ios-9/256/lion-face.png");
    this.res.end();
  } 
  else if(request.text && botRegexFf.test(request.text)) {
    this.res.writeHead(200);
    postMessage(phrase2);
    this.res.end();
  } 
  else if(request.text && botRegexDo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("GO: 170k\nBC: 46k\nLO: 15k");
    this.res.end();
  }
  else if(request.text && botRegex6.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://marvelbitvachempionov.ru/wp-content/uploads/maps/aqmap6en.jpg");
    postMessage("https://docs.google.com/spreadsheets/d/1qi-3KOfLnI0c4YL4b9CB85e1OXw4HmtaVaCbbUR4aOs/htmlview");
    this.res.end();
  }
  else if(request.text && botRegex61.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://marvelbitvachempionov.ru/wp-content/uploads/maps/aqmap6-1en.jpg");
    this.res.end();
  }
  else if(request.text && botRegex62.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://marvelbitvachempionov.ru/wp-content/uploads/maps/aqmap6-2en.jpg");
    this.res.end();
  }
  else if(request.text && botRegex63.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://marvelbitvachempionov.ru/wp-content/uploads/maps/aqmap6-3en.jpg");
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
