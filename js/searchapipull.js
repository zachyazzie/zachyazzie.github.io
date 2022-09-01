let queryString = location.search.substring(1);

export function displayMovies(movie) { 
        console.log(movie)
        //create parent article to hold all elements

        let container = document.createElement("div");
        container.setAttribute('class', 'container')

        let movie_div = document.createElement("div");
        movie_div.setAttribute('class', 'movie-card');

        let post_wrap = document.createElement("div"); 
        post_wrap.setAttribute('class', 'post-wrap')

        let post = document.createElement("div");
        post.setAttribute('class', 'post');

        let post_front = document.createElement("div");
        post_front.setAttribute('class', 'post-front');

        let post_back = document.createElement("div");
        post_back.setAttribute('class', 'post-back');

        let post_except = document.createElement("div");
        post_except.setAttribute('class', 'post-except');

        let post_info = document.createElement("div");
        post_info.setAttribute('class', 'post-info');

        let post_rating = document.createElement("div");
        post_rating.setAttribute('class', 'post-rating');

        //create title
        let title = document.createElement("h2");
        title.setAttribute('class', 'movie-title');
        title.innerText = movie.original_title;

        //create title
        let titleBack = document.createElement("h2");
        titleBack.setAttribute('class', 'movie-title');
        titleBack.innerText = movie.original_title;

        //create poster
        const imagesrc = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
        let post_img = document.createElement("div");
        post_img.setAttribute('class', 'post-img');
        post_img.setAttribute('alt', `${movie.original_title} poster`);
        post_img.style.backgroundImage = `url(${imagesrc})`;

        //create rating
        let rating = document.createElement("span");
        rating.setAttribute('class', 'rating')
        rating.innerText = Math.round(movie.vote_average * 10) / 10;

        //create synopsis
        let synopsis = document.createElement("p");
        synopsis.setAttribute('class', 'synopsis');
        synopsis.innerText = movie.overview;

        //create button
        let button = document.createElement('button')
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'button');
        button.onclick = loadPage;

        function loadPage() {
            location.href = `standalonemoviepage.html?${movie.id}`;
        }
        
        let button_link = document.createElement('a');
        button_link.setAttribute('class', 'button-link');
        button_link.innerText = 'See More';

        button.appendChild(button_link)
        
        post_rating.appendChild(rating);

        post_info.appendChild(title);

        post_except.appendChild(titleBack)
        post_except.appendChild(synopsis);
        post_except.appendChild(button) 

        post_front.appendChild(post_img);
        post_front.appendChild(post_rating);
        post_front.appendChild(post_info);

        post_back.appendChild(post_except);

        post.appendChild(post_front);
        post.appendChild(post_back);

        post_wrap.appendChild(post);

        document.querySelector('.movie-search-container').appendChild(post_wrap);  
}

export function displayTV(show) {   
        //create parent article to hold all elements

        let container = document.createElement("div");
        container.setAttribute('class', 'container')

        let movie_div = document.createElement("div");
        movie_div.setAttribute('class', 'movie-card');

        let post_wrap = document.createElement("div");
        post_wrap.setAttribute('class', 'post-wrap')

        let post = document.createElement("div");
        post.setAttribute('class', 'post');

        let post_front = document.createElement("div"); 
        post_front.setAttribute('class', 'post-front');

        let post_back = document.createElement("div");
        post_back.setAttribute('class', 'post-back');

        let post_except = document.createElement("div");
        post_except.setAttribute('class', 'post-except');

        let post_info = document.createElement("div");
        post_info.setAttribute('class', 'post-info');

        let post_rating = document.createElement("div");
        post_rating.setAttribute('class', 'post-rating');

        //create title
        let title = document.createElement("h2");
        title.setAttribute('class', 'movie-title');
        title.innerText = show.name;

        //create title
        let titleBack = document.createElement("h2");
        titleBack.setAttribute('class', 'movie-title');
        titleBack.innerText = show.name;

        //create poster
        const imagesrc = `https://image.tmdb.org/t/p/w342${show.poster_path}`;
        let post_img = document.createElement("div");
        
        post_img.setAttribute('class', 'post-img');
        post_img.setAttribute('alt', `${show.original_title} poster`);
        post_img.style.backgroundImage = `url(${imagesrc})`;

        //create rating
        let rating = document.createElement("span");
        rating.setAttribute('class', 'rating')
        rating.innerText = Math.round(show.vote_average * 10) / 10;

        //create synopsis
        let synopsis = document.createElement("p");
        synopsis.setAttribute('class', 'synopsis');
        synopsis.innerText = show.overview;

        //create button
        let button = document.createElement('button')
        button.setAttribute('class', 'button');
        button.addEventListener('click', loadPage);

        function loadPage() {
            window.location.href = `standalonetvpage.html?${show.id}`;
        }
        
        let button_link = document.createElement('a');
        button_link.setAttribute('class', 'button-link');
        button_link.innerText = 'See More';
        

        button.appendChild(button_link)

        post_rating.appendChild(rating);

        post_info.appendChild(title);

        post_except.appendChild(titleBack)
        post_except.appendChild(synopsis);
        post_except.appendChild(button) 

        post_front.appendChild(post_img);
        post_front.appendChild(post_rating);
        post_front.appendChild(post_info);

        post_back.appendChild(post_except);

        post.appendChild(post_front);
        post.appendChild(post_back);

        post_wrap.appendChild(post);

        document.querySelector('.tv-search-container').appendChild(post_wrap);
}

export function validateSearch(searchTerm) {

};


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch(`https://api.themoviedb.org/3/search/multi?api_key=d5c0cd4c83f8a5b0f84f1923dfaa2281&language=en-US&query=${queryString}&page=1&include_adult=false`, requestOptions)
    .then(response => response.json())
    .then(result => result.results.forEach(result => {
            if (result.media_type == "movie") {
                if(result.overview != ""){
                    if(result.poster_path != null){
                        displayMovies(result);
                    }              
                }
            }
            else if (result.media_type == "tv") {
                if(result.overview != ""){
                    if(result.poster_path != null){
                        displayTV(result);
                    } 
                }
    } 
    }))
    .catch(error => console.log('error', error));