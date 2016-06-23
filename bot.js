var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /(mfw)|(tfw)|(Mfw)|(MFW)|(Tfw)|(TFW)/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/;
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexDenk = /^\.denk/;
      botRegexGamb = /^\.potd/;
      botRegexMaga = /(maga)|(MAGA)|(Maga)|(kek)|(Kek)|(top kek)|(Top kek)|(Top Kek)/;
      botRegexWil = /^\/.willy/;
      
      //images for maga call
      maga1 = 'https://i.sli.mg/E3BbKK.jpg'; maga2 = 'http://trumpimages.com/TqfJA.jpg'
      maga3 = 'http://trumpimages.com/YECTD.jpg'; maga4 = 'https://i.redditmedia.com/3ajTo756OzvESMhS1uvrz4GfRgIaD-IjFrua8uHZasc.jpg?w=349&s=54ca7e69b999bd9d60ce33610b38cfee';
      maga5 = 'https://i.sli.mg/l2knjY.jpg'
 
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  
/*  else if(request.text && botRegexMaga.test(request.text)) {
    this.res.writeHead(200);
    if(0.0 >= Math.random() =< 0.2)
      postMessage(maga1);
    else if(0.21 >= Math.random() =< 0.5)
      postMessage(maga2)
    else if(0.51 >= Math.random() =< 0.7)
      postMessage(maga3);
    else if(0.71 >= Math.random() =< 0.89)
      postMessage(maga4);
    else
      postMessage(maga5);
    this.res.end();
  } */
  
  else if(request.text && botRegexWil.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Fuck Willy.");
    this.res.end();
  }
  
  else if(request.text && botRegexGamb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Stop gambling you degenerate fuck.");
    this.res.end();
  } 
  
  else if(request.text && botRegexDenk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/playlist?list=PLFPwGmnS_lyyVY5qjqZmHGbyr8doP0PH2");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/SRMFL/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  
  else if(request.text && botRegexOW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://kt-media.knowtechie.netdna-cdn.com/wp-content/uploads/2016/03/Overwatch-Tracer-Over-The-Shoulder.png");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1hSuEG7oplnx4IX6HGsMOjsWb9TCqC4-F1NLjuBz5PCM/edit");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/SRMFL/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/SRMFL/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
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
