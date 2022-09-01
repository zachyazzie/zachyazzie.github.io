
    let queryString = location.search.substring(1);

    export function displayPage(titleDetails) {
        console.log(titleDetails);

        let infoDiv = document.createElement("div");
        infoDiv.setAttribute('class', 'info-div');
        let imgDiv = document.createElement("div");
        let synopsisDiv = document.createElement("div")
        let ratingDateDiv = document.createElement("div");
        let genreDiv = document.createElement('div');
        let networkDiv = document.createElement('div');
        networkDiv.setAttribute('class', 'network-div');
        ratingDateDiv.setAttribute('class', 'rating-date-div');
        
        
        
    
        let genre = document.createElement('div');
        genre.setAttribute('class', 'genres');

        let genreArr = [];
        for(let i = 0; i < titleDetails.genres.length; i++) {
            genreArr.push(` ${titleDetails.genres[i].name}`)
        }
        genreArr = genreArr.toString();
        genreArr = genreArr.slice(1)
        genre.innerHTML = `<h4>Genre(s):</h4> <p>&nbsp;${genreArr}</p>`;
        genreDiv.appendChild(genre);
        
        if (titleDetails.homepage != "") {
            let network = document.createElement('h4');
            network.setAttribute('class', 'networks');
            let networkPath = `http://image.tmdb.org/t/p/w300/${titleDetails.networks[0].logo_path}`;
            let networkLogo = document.createElement('img');
            let showLocation = document.createElement('a');
            networkLogo.setAttribute('src', `${networkPath}`);
            networkLogo.setAttribute('class', 'network-logo');
            network.innerText = 'Where to watch:';
            showLocation.href = titleDetails.homepage;
            showLocation.appendChild(networkLogo);
            networkDiv.appendChild(network);
            networkDiv.appendChild(showLocation);
            }
        

        let title = document.createElement('h1');
        title.setAttribute('class', 'standalone-title'); 
        title.innerText = titleDetails.name;
    
        let synopsis = document.createElement('p');
        synopsis.setAttribute('class', 'standalone-synopsis');
        synopsis.innerText = titleDetails.overview;
    
        let ratingDiv = document.createElement('div');
        let rating = document.createElement('div');
        rating.setAttribute('class', 'standalone-rating');
        rating.innerHTML = `<h4>User rating:</h4> <p>&nbsp;${Math.round(titleDetails.vote_average * 10) / 10}</p>`;
        ratingDiv.setAttribute('class', 'standalone-rating-div');
        ratingDiv.appendChild(rating);
    
        let releaseDiv = document.createElement('div');
        let release = document.createElement('div');
        release.setAttribute('class', 'standalone-release');
        release.innerHTML = `<h4>Air date:</h4> <p>&nbsp;${titleDetails.first_air_date}</p>`;
        releaseDiv.setAttribute('class', 'standalone-release-div');
        releaseDiv.appendChild(release);
    
        infoDiv.appendChild(title);

        if(titleDetails.backdrop_path != null) {
            const imagesrc = `https://image.tmdb.org/t/p/w1280${titleDetails.backdrop_path}`;
            let poster = document.createElement("img");
            imgDiv.setAttribute('class', 'backdrop-path');
            poster.setAttribute('alt', `${titleDetails.name} background`);
            poster.src = imagesrc;
            imgDiv.appendChild(poster);
        }
    
        synopsisDiv.appendChild(synopsis);
        ratingDateDiv.appendChild(rating);
        ratingDateDiv.appendChild(release);
    
        infoDiv.appendChild(synopsisDiv);
        infoDiv.appendChild(ratingDateDiv);
        infoDiv.appendChild(genreDiv)
        infoDiv.append(networkDiv);
        document.querySelector('.standalone-container-tv').appendChild(imgDiv);
        document.querySelector('.standalone-container-tv').appendChild(infoDiv);
        
    }
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch(`https://api.themoviedb.org/3/tv/${queryString}?api_key=d5c0cd4c83f8a5b0f84f1923dfaa2281`, requestOptions)
        .then(response => response.json())
        .then(result => displayPage(result))
        .catch(error => console.log('error', error));