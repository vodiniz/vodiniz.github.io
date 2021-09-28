var movies = ['https://images.justwatch.com/poster/173369637/s276/watchmen-o-filme.webp',
'https://images.justwatch.com/poster/243217444/s276/zack-snyders-justice-league.webp',
'https://images.justwatch.com/poster/204136121/s276/the-devil-all-the-time.webp',

]

for (let i=0; i< movies.length; i++){
    document.write("<img class='movie-poster' src ='" + movies[i] + "' width = '342' height='513' ></img>");
}

function addPoster() {
    var url = document.getElementById('poster-url').value;
    var moviesElement = document.getElementById('movies')
    
    if (movies.length % 5 == 0){
        moviesElement.innerHTML += '<br />'
    }

    movies.push(url)

    console.log(movies.length) 

    moviesElement.innerHTML += "<img class='movie-poster' src ='" + url + "' width = '276' height='392' ></img>"
        
}
