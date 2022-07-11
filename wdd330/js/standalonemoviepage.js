let queryString = location.search.substring(1);

export function displayPage(titleDetails) {
    console.log(titleDetails)    

    let infoDiv = document.createElement("div");
    let imgDiv = document.createElement("div");
    let synopsisDiv = document.createElement("div")
    let ratingDateDiv = document.createElement("div");
    ratingDateDiv.setAttribute('class', 'rating-date-div');
    
    let standalonePoster = document.createElement('div');
    const imagesrc = `https://image.tmdb.org/t/p/w300${titleDetails.poster_path}`;
    let poster = document.createElement("img");
    imgDiv.setAttribute('class', 'standalone-poster');
    poster.setAttribute('alt', `${titleDetails.original_title} poster`);
    poster.src = imagesrc;

    let title = document.createElement('h1');
    title.setAttribute('class', 'standalone-title'); 
    title.innerText = titleDetails.original_title;

    let synopsis = document.createElement('p');
    synopsis.setAttribute('class', 'standalone-synopsis');
    synopsis.innerText = titleDetails.overview;

    let ratingDiv = document.createElement('div');
    let rating = document.createElement('p');
    rating.setAttribute('class', 'standalone-rating');
    rating.innerText = `User rating: ${Math.round(titleDetails.vote_average * 10) / 10}`;
    ratingDiv.setAttribute('class', 'standalone-rating-div');
    ratingDiv.appendChild(rating);

    let releaseDiv = document.createElement('div');
    let release = document.createElement('p');
    release.setAttribute('class', 'standalone-release');
    release.innerText = `Release date: ${titleDetails.release_date}`;
    releaseDiv.setAttribute('class', 'standalone-release-div');
    releaseDiv.appendChild(release);

    infoDiv.appendChild(title);
    imgDiv.appendChild(poster);
    synopsisDiv.appendChild(synopsis);
    ratingDateDiv.appendChild(rating);
    ratingDateDiv.appendChild(release);

    infoDiv.appendChild(synopsisDiv);
    infoDiv.appendChild(ratingDateDiv);

    document.querySelector('.standalone-container').appendChild(infoDiv);
    document.querySelector('.standalone-container').appendChild(imgDiv);
}
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/movie/${queryString}?api_key=d5c0cd4c83f8a5b0f84f1923dfaa2281`, requestOptions)
    .then(response => response.json())
    .then(result => displayPage(result))
    .catch(error => console.log('error', error));
