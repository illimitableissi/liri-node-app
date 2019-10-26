# liri-node-app

Creator: Isimemen Inegbedion

Overview
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. Here are the list of commans to use in the app:

concert-this

spotify-this-song

movie-this

do-what-it-says

Technology Used:

Javascript
Nodejs
Node packages:
fs
Node-Spotify-API
Axios
Moment
DotEnv
APIs used:
Bands in Town
OMDB

Step by Step instructions

Open your terminal (e.g. Git Bash).

Navigate to the folder that contains the liri.js file.

The output given will vary depending on which command you will use.

All commands issued will log the results to the log.txt file.

###movie-this command

 node liri.js movie-this "name of movie"

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.

![screenshot](https://illimitableissi.github.io/liri-node-app/screenshots/movie.PNG)

###concert-this command

 node liri.js concert-this "name of artist or band"
Output: The system will display a list of all events where the artist or band will perform. The name of the venue, location, and date of the event will be shown.

![screenshot](https://illimitableissi.github.io/liri-node-app/screenshots/concert.PNG)

###spotify-this-song command

 node liri.js spotify-this-song "name of song"
Output: The system will display the Artist Name, Song Name, Preview link of the song from Spotify and the album that the song is from.

![screenshot](https://illimitableissi.github.io/liri-node-app/screenshots/song.PNG)


###do-what-it-says command

 node liri.js do-what-it-says
Output: The system will read the text in the random.txt file, and perform the command listed in the random.txt file. This case being spotify-this-song "I Want it That Way"

![screenshot](https://illimitableissi.github.io/liri-node-app/screenshots/dowhatitsays.PNG)


