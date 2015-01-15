'use strict';
var request = require('request');

module.exports = function (movie, cb){
  if (typeof movie !== 'string') {
    throw new TypeError('Expected a string');
  }
  var url = 'http://www.omdbapi.com/?t='+movie+'&y=&plot=short&r=json';
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      cb(data);
    }else {
      cb(error);
    }
  });
};
