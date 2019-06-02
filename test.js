"use strict";
const assert = require("assert");
const nm = require("./").getByID;

describe("node-movie", () => {
  let movie;
  beforeEach(done => {
    nm("tt1375666", data => {
      movie = data;
      done();
    });
  });

  it("should return the correct title", () => {
    assert.equal(movie.Title, "Inception");
  });
});

describe("node-movie", () => {
  let movie;
  beforeEach(done => {
    nm("tt1", data => {
      movie = data;
      done();
    });
  });

  it("should return error when the request is failed", () => {
    assert("Error" in movie);
  });
});
