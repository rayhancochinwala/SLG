const request = require('request-promise');
const config = require('./config');
const fs = require('fs');
fs.readFile('proxies.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array) {
      if (array[i] === '') {

      } else {
        s(array[i], array[i])
      }
    }
});
function s(proxy, og) {
  if (proxy.split(':')[2] != undefined) {
    proxy = `http://${proxy.split(':')[2]}:${proxy.split(':')[3]}@${proxy.split(':')[0]}:${proxy.split(':')[1]}`
  }
  const opts = {
    method: 'GET',
    uri: `${config.link}`,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36'
    },
    gzip: true,
    time: true,
    resolveWithFullResponse: true,
    proxy: `${proxy}`,
    json: true
  }
  request(opts)
    .then(function (json) {
      console.log(og + ' - ' + json.elapsedTime);
      //console.log(json.product.title);
      //json.product.variants.forEach(function(size) {
        //console.log(`${size.title} - http://${link.split('//')[1].split('/')[0]}/cart/${size.id}:1`);
      //})
    })
}
