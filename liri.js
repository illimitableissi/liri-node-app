require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var userInput = process.argv[2];


function movie() {

axios.get(`https://www.omdbapi.com/?apikey=trilogy&t=${userInput}&type=movie`).then(
  function(response) {

var movie = response.data
console.log(
    `Movie Title: ${movie.Title}
    Year: ${movie.Year}
    IMDB Rating: ${movie.imdbRating}
    Rotten Tomatoes Rating: ${movie.Ratings[1].Value}
    Country: ${movie.Country}
    Language: ${movie.Language}
    Plot: ${movie.Plot}
    Actors: ${movie.Actors}`
);

  })
  .catch(function(error) {
    if (error.response) {
        console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/")
    }
  });
}

// movie()


function song() {

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);
 
spotify.search({ type: 'track', query: 'Secrets', limit:1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
  console.log(JSON.stringify(data, null, 2)); 
});

}
// song()


function concert() {

var moment = require('moment');

axios.get(`https://rest.bandsintown.com/artists/${userInput}/events?app_id=codingbootcamp`).then(
    function(response) {
    
        var timeFormat = moment(response.data[0].datetime).format("MM/DD/YYYY")
          console.log(
              `Venue Name: ${response.data[0].venue.name} 
              Location (City): ${response.data[0].venue.city} 
               Date of the Event: ${timeFormat}`
              )
        })          

        .catch(function(error) {
          if (error.response) {}
        });
}

concert()

// function dowhatitsays() {

// fs.readFile("random.txt", "utf8", function(error, data) {

//     // If the code experiences any errors it will log the error to the console.
//     if (error) {
//       return console.log(error);
//     }
  
//     // We will then print the contents of data
//     console.log(data)
// });


// // Next, we store the text given to us from the command line.
// var text = process.argv[2];

// // Next, we append the text into the "sample.txt" file.
// // If the file didn't exist, then it gets created on the fly.
// fs.appendFile("log.txt", text, function(err) {

//   // If an error was experienced we will log it.
//   if (err) {
//     console.log(err);
//   }

// });

// }