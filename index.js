'use strict';
var request = require('request');
var chalk   = require('chalk');

function isObject(x) {
  return typeof x === 'object' && x !== null;
}

function countOptions(options) {
  return Object.keys(options).length;
}

module.exports = function (options, cb){
  if (!isObject(options)) {
    cb(chalk.bold.red('Error: Expected an object'));
    return;
  }
  if (countOptions(options) > 1) {
    cb(chalk.bold.red('Error: Expected a title or an id. Not both.'));
    return;
  }
  var qsObj;
  if (typeof options.title == 'string') {
    qsObj = {t: options.title, plot: 'short', r: 'json'};
  }
  if (typeof options.id == 'string') {
    qsObj = {i: options.id, plot: 'short', r: 'json'};
  }
  var url = 'http://www.omdbapi.com';
  request({url:url, qs:qsObj, json:true}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      cb(body);
    }else {
      cb(error);
    }
  });
};
