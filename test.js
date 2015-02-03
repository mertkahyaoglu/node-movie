'use strict';
var assert = require('assert');
var nm = require('./').getByID;

describe('node-movie', function(){
  this.timeout(5000);
  var movie;
  beforeEach(function (done) {
    nm('tt1375666', function(err, data) {
      if(!err) {
        movie = data;
      }
      done();
    });
  });
  it('should return the correct title', function(){
    assert.equal(movie.Title, "Inception");
  });
});
