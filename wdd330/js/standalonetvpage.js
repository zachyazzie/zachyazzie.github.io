let queryString = location.search.substring(1);

export function displayPage(titleDetails) {
    console.log(titleDetails)    

    let div = document.createElement("div");
    const imagesrc = `https://image.tmdb.org/t/p/w500${titleDetails.poster_path}`;
    let poster = document.createElement("img");
    poster.setAttribute('class', 'standalone-poster');
    poster.setAttribute('alt', `${titleDetails.name} poster`);
    poster.src = imagesrc;

    let title = document.createElement('h1');
    title.setAttribute('class', 'standalone-title');
    title.innerText = titleDetails.name;

    let synopsis = document.createElement('p');
    synopsis.setAttribute('class', 'standalone-synopsis');
    synopsis.innerText = titleDetails.overview;

    let rating = document.createElement('h2');
    rating.setAttribute('class', 'standalone-rating');
    rating.innerText = Math.round(titleDetails.vote_average * 10) / 10;

    let release = document.createElement('p');
    release.setAttribute('class', 'standalone-release');
    release.innerText = titleDetails.first_air_date


    div.appendChild(title);
    div.appendChild(poster);
    div.appendChild(synopsis);
    div.appendChild(rating);
    div.appendChild(release);
    console.log(div)
    document.querySelector('.standalone-container-tv').appendChild(div)
}
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/tv/${queryString}?api_key=d5c0cd4c83f8a5b0f84f1923dfaa2281`, requestOptions)
    .then(response => response.json())
    .then(result => displayPage(result))
    .catch(error => console.log('error', error));
