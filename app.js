var Nexmo = require('nexmo');

nexmo = new Nexmo({
  apiKey: "yyy",
  apiSecret: "xxx"
}, {
  debug: true
});

var regex = /â|ê|î|ô|û|ë|ï|ç|ù/g;

console.log('This worked');
