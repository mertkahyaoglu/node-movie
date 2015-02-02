'use strict';
var assert = require('assert');
var nm = require('./').getByID;

describe('node-movie', function(){
  var movie;
  beforeEach(function (done) {
    nm('tt1375666', function(data) {
      movie = data;
      done();
    });
  });
  it('should return the correct title', function(){
    assert.equal(movie.Title, "Inception");
  });
});
