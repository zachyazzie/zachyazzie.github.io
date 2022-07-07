import { displayTrending } from "./displayMainPageMovie.js";


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=d5c0cd4c83f8a5b0f84f1923dfaa2281", requestOptions)
    .then(response => response.json())
    .then(result => {displayTrending(result.results)})
    .catch(error => console.log('error', error));
