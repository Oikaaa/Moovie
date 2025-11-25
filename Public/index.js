async function GetASpecificMovie(movieId) {
    try {
        const response = await fetch("./Data/moviesDatabase.json")
        const data = await response.json()

        const currentMovie = await data.filter((movie) => movie.movieId == movieId)
        return currentMovie[0] // Return the current movie
    } catch (error) {
        console.log(error)
    }
}

function my_rounding(n){
    if (n % Math.floor(n) >= 0.7){
        return Math.floor(n + 1) // If the number is 0.7 .8 and .9, round up to the next digit
    }else{
        return Math.floor(n)
    }
}


function addEventListenerToMovie (movie){
    movie.addEventListener('click', async function(){
        const movieDetailDiv = document.getElementById('movieDetailActual')

        const result = await GetASpecificMovie(movie.id)
        const currentMovie = result

        function genreDisplaying(movie){
            const genres = movie.movieGenres.split(', ')
            let listOfGenres = ''
            genres.forEach(genre => {
                listOfGenres += `<li class="genreStyle"><p>${genre}</p></li> \n`
            })
            return listOfGenres
        }

        function ratingDisplaying(movie){
            const rounded_rating = my_rounding(movie.movieRate) // Rounding the rating
            let number_of_current_stars = 0
            let stars = ""
            for (let i = 0; i < Math.floor(rounded_rating/2); i++) { // Add full star
                stars += `<i class="fa fa-star star" aria-hidden="true"></i> \n`
                number_of_current_stars += 1
            }
            if (rounded_rating - Math.floor(rounded_rating/2)*2 == 1){ // Add half star if meet the condition
                stars += `<i class="fa fa-star-half-o star" aria-hidden="true"></i> \n`
                number_of_current_stars += 1
            }
            while (5 - number_of_current_stars != 0){ // add empty star if the stars are not full
                stars += `<i class="fa fa-star star-empty" aria-hidden="true"></i> \n`
                number_of_current_stars += 1
            }
            return stars
        }
        
        const movieDetail = document.createElement('div')
        movieDetail.classList.add('movieDetail')
        movieDetail.innerHTML = `
        <div class="detailContainer">
            <div style="position: relative;">
                <img class="backgroundImgDetail" src="${currentMovie.movieImg}" alt="">
                <div class="shadowImg"></div>
                <div class="close" id="close"><p>X</p></div>
            </div>
            <div class="information">
                <div class="detailInformation">
                    <h1 class="detailHeader">${currentMovie.movieName}</h1>
                    <div class="detailDetail">
                        <p>${currentMovie.yearPublished}</p>
                        <p>|</p>
                        <p>${currentMovie.duration}</p>
                        <p>|</p>
                        <div style="display: flex; justify-content: left; align-content: center; width: 50%;">
                            <div>
                                ${ratingDisplaying(currentMovie)}
                            </div>
                            <p style="margin: 0px 10px;">${currentMovie.movieRate}</p>
                        </div>
                    </div>
                    <p class="description">${currentMovie.movieDes}</p>
                    <p class="casts"><span>Casts:</span> ${currentMovie.movieCast}</p>
                    <div class="detailButtons">
                        <a href="${currentMovie.movieVideo}" class="WatchNowDetail" >
                            <p>Watch Now</p>
                        </a>
                    </div>
                </div>
                <div class="genres">
                    <h5 style="cursor: default;">Genres</h5>
                    <ul class="genreDisplay">
                        ${genreDisplaying(currentMovie)}
                    </ul>
                </div>
            </div>
        </div>
         `
        movieDetailDiv.appendChild(movieDetail)

        const closeBtn = document.getElementById("close")
        closeBtn.addEventListener('click', function(){
            movieDetailDiv.innerHTML = ""
        })
    })
}

// Fetching all movies (7 actually) to the trending section
async function FetchingData(movieTag) {
    try {
        const response = await fetch("./Data/moviesDatabase.json")
        const data = await response.json()

        const trendingMovies = data.filter((movie) => movie.movieTags.toLowerCase().includes(movieTag))
        const TrendingSection = document.getElementById('Trending')
        TrendingSection.innerHTML = "" //Clear the container

        trendingMovies.slice(0,7).forEach(movie => {
            const trending_movie = document.createElement("div")
            trending_movie.classList.add("movie")
            trending_movie.setAttribute('id', movie.movieId)
            trending_movie.innerHTML = `
                <img src="${movie.moviePoster}" class="moviePoster" alt="Movie Poster">
            `

            addEventListenerToMovie(trending_movie) //add an event listener for each movie
            TrendingSection.appendChild(trending_movie)
        });
    } catch (error) {
        console.log(error)
    }
}

FetchingData("trending")

// Change window for the displaying movie (The big one)
const watchNowBtn = document.getElementById('watchNow')

watchNowBtn.addEventListener('click', function(){
    console.log("hi")
    window.open('https://www.netflix.com/au/title/81602830')
})

// Tag movie selection
async function FetchingDataBaseOnGenre(movieGenre) {
    try {
        const response = await fetch("./Data/moviesDatabase.json")
        const data = await response.json()

        const selectedMovies = data.filter((movie) => movie.movieGenres.split(", ").includes(movieGenre))
        const genreSection = document.getElementById("genreSection")
        genreSection.innerHTML = ''

        selectedMovies.forEach(function(movie){
            const genre_selected_movie = document.createElement("div")
            genre_selected_movie.classList.add("movie")
            genre_selected_movie.classList.add("tagMovie")
            genre_selected_movie.setAttribute('id', movie.movieId)
            genre_selected_movie.innerHTML = `
                <img src="${movie.moviePoster}" class="moviePoster" alt="Movie Poster">
            `

            addEventListenerToMovie(genre_selected_movie) //add an event listener for each movie
            genreSection.appendChild(genre_selected_movie)
        })
    } catch (error) {
        console.log(error)
    }
}

// Front End
const genres = document.querySelectorAll(".tag")

genres.forEach(function(tag){
    // Display movies initially
    if (tag.classList.contains('currentTag')){ // if the tag element contains a className
        FetchingDataBaseOnGenre(tag.id)
    }

    tag.addEventListener('click', function(){
        const selected_genre = tag.id

        // Reset genresgenres style
        genres.forEach(function(tag_style){
            tag_style.classList.remove('currentTag')
        })
        //Add currentTag to the current tag
        tag.classList.add('currentTag')

        //Fetch new content
        FetchingDataBaseOnGenre(selected_genre)
    })
})