"use strict";
const fetch = require("node-fetch");

const BASE_URL = `http://www.omdbapi.com/?apikey=6547d8e&`;

module.exports = async (title, cb) => {
  if (typeof title != "string") {
    throw TypeError("Expected a string as first argument");
  }

  const url = `${BASE_URL}t=${title}`;
  const response = await fetch(url);
  const data = await response.json();

  cb(data);
};

module.exports.getByID = async (id, cb) => {
  if (typeof id != "string") {
    throw TypeError("Expected a string as first argument");
  }

  const url = `${BASE_URL}i=${id}`;
  const response = await fetch(url);
  const data = await response.json();

  cb(data);
};
