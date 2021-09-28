function load_movies(){
    movie_container = document.getElementById('movies')
    for (let i=0; i < movies.length; i++){
        movie_container.innerHTML += ("<img class='movie-poster' src ='" + movies[i] + "' width = '342' height='513'>");
    }

}


function addPoster(url) {
    var moviesElement = document.getElementById('movies');
    
    if (movies.length % 5 == 0 ){
        moviesElement.innerHTML += '<br />';
    }

    movies.push(url);

    console.log(movies.length);

    moviesElement.innerHTML += "<img class='movie-poster' src ='" + url + "' width = '342' height='513' ></img>";
        
}


function search_movie(){
    let movie_name = document.getElementById('search-text').value;
    movie_name = movie_name.replace(/ /g, "+");
    request_tmdb_api(movie_name);

}

async function request_tmdb_api(search_text){
    let api_url = "http://189.82.247.196:8000/search_api?search-text="+search_text;
    let response = await fetch(api_url);
    let json = await response.json();
    let poster_path = json['results'][0]['poster_path'];
    let image_url = "http://image.tmdb.org/t/p/w780/"+poster_path;
    addPoster(image_url);

    

}


var movies = ['https://images.justwatch.com/poster/173369637/s276/watchmen-o-filme.webp',
'https://images.justwatch.com/poster/243217444/s276/zack-snyders-justice-league.webp',
'https://images.justwatch.com/poster/204136121/s276/the-devil-all-the-time.webp',
'https://images.justwatch.com/poster/249473713/s276/dune.webp',
'https://images.justwatch.com/poster/250717736/s276/the-matrix-resurrections.webp',
'https://images.justwatch.com/poster/175729509/s276/free-guy.webp',

];

load_movies();

 

