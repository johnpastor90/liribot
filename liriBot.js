require("dotenv").config();
var request = require("request");

const getMovie = movie => {
    var url = "http://www.omdbapi.com/?t=" + movie + "&apikey=" + process.env.OMDB_API_KEY
    request(url, function (error, response, body) {
        let movieData = JSON.parse(body)
        console.log(movieData)    
    })
}
const movieName = process.argv[3]
getMovie(movieName);

