# node-movie

> Get movie data easily from imdb


## Install

```
$ npm install --save node-movie
```


## Usage

```js
// get movie by title
var movie = require('node-movie');
movie('fury', function (err, data) {
	console.log(data);
});

// get movie by imdbID
var movie = require('node-movie').getByID;
movie('tt2713180', function (err, data) {
	console.log(data);
});
// Output:
// {
// 	"Title":"Fury",
// 	"Year":"2014",
// 	"Rated":"R",
// 	"Released":"17 Oct 2014",
// 	"Runtime":"134 min",
// 	"Genre":"Action, Drama, War",
// 	"Director":"David Ayer",
// 	"Writer":"David Ayer",
// 	"Actors":"Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña",
// 	"Plot":"April, 1945. As the Allies make their final push in the European Theatre, a battle-hardened army sergeant named Wardaddy commands a Sherman tank and his five-man crew on a deadly mission behind enemy lines. Out-numbered, out-gunned, and with a rookie soldier thrust into their platoon, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
// 	"Language":"English, German",
// 	"Country":"UK, China, USA",
// 	"Awards":"4 wins & 9 nominations.",
// 	"Poster":"http://ia.media-imdb.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SX300.jpg",
// 	"Metascore":"64",
// 	"imdbRating":"7.9",
// 	"imdbVotes":"89,030",
// 	"imdbID":"tt2713180",
// 	"Type":"movie",
// 	"Response":"True"
// }
```

## License

MIT © Mert Kahyaoğlu 2015
