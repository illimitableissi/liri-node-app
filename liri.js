require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var moment = require('moment');
var command = process.argv[2];
var userInput = process.argv[3];

switch (command) {
    case "concert-this":
        concert(userInput);
        break;
    case "spotify-this-song":
        song(userInput);
        break;
    case "movie-this":
        movie(userInput);
        break;
    case "do-what-it-says":
        dowhatitsays(userInput);
        break;
};


function movie(userInput) {

axios.get(`https://www.omdbapi.com/?apikey=trilogy&t=${userInput}&type=movie`).then(
  function(response) {

if (!userInput) {
    console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/")
    console.log("Its on Netflix!")
    
}

var movie = response.data
var movieInfo = 
    `Movie Title: ${movie.Title}
    Year: ${movie.Year}
    IMDB Rating: ${movie.imdbRating}
    Rotten Tomatoes Rating: ${movie.Ratings[1].Value}
    Country: ${movie.Country}
    Language: ${movie.Language}
    Plot: ${movie.Plot}
    Actors: ${movie.Actors}`

console.log(movieInfo);
fs.appendFile("log.txt", movieInfo, function() {});

  })
  .catch(function(error) {
    if (error.response) {
        console.log(error)
    }
  });
}


function song(userInput) {
 
var spotify = new Spotify(keys.spotify);
 
spotify.search({ type: 'track', query: userInput}, function(err, data) {

    //if user input is more than one word, concatenate reply

        var songData =       
        `Artist Name: ${data.tracks.items[0].artists[0].name}
        Song Name: ${data.tracks.items[0].name}
        Album: ${data.tracks.items[0].album.name}
        Preview Link: ${data.tracks.items[0].preview_url}
        `
    console.log(songData)
    fs.appendFile("log.txt", songData, function() {});

    });
}


function concert(userInput) {
  

axios.get(`https://rest.bandsintown.com/artists/${userInput}/events?app_id=codingbootcamp`).then(
    function(response) {
        for (var i = 0; i < response.data.length; i++) {
    
        var timeFormat = moment(response.data[i].datetime).format("MM/DD/YYYY")
        var concertInfo = 
        `Venue Name: ${response.data[i].venue.name} 
        Location (City): ${response.data[i].venue.city} 
        Date of the Event: ${timeFormat}`
          
        console.log(concertInfo)
        fs.appendFile("log.txt", concertInfo, function() {});
           }
        })          

        .catch(function(error) {
          if (error.response) {}
        });
}


function dowhatitsays(data) {

fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }
    var dataArr = data.split(",")
    console.log(dataArr)
    song(dataArr[1]);
});
    
}


