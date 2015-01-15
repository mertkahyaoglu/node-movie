'use strict';
var assert = require('assert');
var nm = require('./');

describe('node-movie', function(){
  var movie;
  beforeEach(function (done) {
    nm('inception', function(data) {
      movie = data;
      done();
    });
  });
  it('should return the correct title', function(){
    assert.equal(movie.Title, "Inception");
  });
});
