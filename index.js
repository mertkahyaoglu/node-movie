'use strict';
var request = require('request');

module.exports = function (title, cb){
  if (typeof title != 'string') {
    throw TypeError('Expected a string as first argument');
  }
  var url = 'http://www.omdbapi.com';
  var qs = {t: title, plot: 'short', r: 'json'};
  request({url:url, qs:qs, json:true}, function (error, response, body) {
    cb(error, body);
  });
};

module.exports.getByID = function (id, cb){
  if (typeof id != 'string') {
    throw TypeError('Expected a string as first argument');
  }
  var url = 'http://www.omdbapi.com';
  var qs = {i: id, plot: 'short', r: 'json'};
  request({url:url, qs:qs, json:true}, function (error, response, body) {
    cb(error, body)
  });
};
