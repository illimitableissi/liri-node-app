require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");


function movie() {

var omdbAPI = keys.omdb

axios.get(`http://www.omdbapi.com/s=RealSteel&apikey=${omdbAPI}`).then(
  function(response) {

    console.log("The movie's rating is: " + response.data.imdbRating);
  })
  .catch(function(error) {
    if (error.response) {}
  });
}

movie()

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
song()


// function concert() {
//     axios.get(`https://rest.bandsintown.com/artists/"artist${search}/events?app_id=codingbootcamp`).then(
//         function(response) {
//           console.log("The movie's rating is: " + response.data.imdbRating);
//         })
//         .catch(function(error) {
//           if (error.response) {}
//         });
// }


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