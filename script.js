// Show Movies

import { IMG_PATH } from "./apiList.js";
import fetchAPIList from "./apiList.js";

const heroSection = document.querySelector('.hero-section');
const latestMovies = document.querySelector('.latest-movies');
const topRatedMovies = document.querySelector('.top-rated-movies');
const nowPlayingMovies = document.querySelector('.now-playing-movies');
const popularMovies = document.querySelector('.popular-movies');
const comedyMovies = document.querySelector('.comedy-movies');
const horrorMovies = document.querySelector('.horror-movies');
const searchMovies = document.querySelector('.search-movies');

const main = document.getElementById('main');
const form = document.querySelector("#form");
const searchBar = document.querySelector("#search");

const toggleBtn = document.querySelector('.toggle-btn');
const navbarLinks = document.querySelector('.navbar-links');


//Open or close navigation menu (mobile devices)
toggleBtn.addEventListener('click', function toggleNavMenu() {
    navbarLinks.classList.toggle('active');
})


//Get a random "Now Playing" movie at the header section
function getRandomNowPlayingMovie() {
    fetch(fetchAPIList.fetchNowPlayingMovies)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.results.length);

            const latestMovie = document.createElement('div');

            latestMovie.classList.add('latest-movie-backdrop');

            latestMovie.style.backgroundImage = `url(${IMG_PATH + data.results[randomIndex].backdrop_path})`

            latestMovie.innerHTML = 
            `<h2>${data.results[randomIndex].original_title}</h2>

            <p>${data.results[randomIndex].vote_average} <i class="fas fa-star"></i></p>
            
            <p class="movie-overview">${data.results[randomIndex].overview}</p>`
            
            latestMovies.append(latestMovie);
        })
}

getRandomNowPlayingMovie();


function getNowPlayingMovies() {
    fetch(fetchAPIList.fetchNowPlayingMovies)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(movie => {

                const nowPlayingMovie = document.createElement('div');

                nowPlayingMovie.classList.add('individual-movie');
            
                nowPlayingMovie.innerHTML = getMovies(movie);

                nowPlayingMovies.append(nowPlayingMovie);
            })
        })
}

getNowPlayingMovies();


// Fetch all the movies for the related fetch API
function getMovies(movie) {
    return `<img class="movie-image" src="${IMG_PATH + movie.poster_path}"></img>    
    <div class="movie-info">
    <h3>${movie.original_title}</h3>
    <div class="rating">
    <p>${movie.vote_average} <i class="fas fa-star"></i></p>
    <div>
    </div>`;
}

// Получаем все контейнеры фильмов
const movieContainers = document.querySelectorAll('.individual-movie');

// Добавляем обработчик событий для каждого фильма
movieContainers.forEach(container => {
    container.addEventListener('click', () => {
        // Переключаем класс active, который будет управлять видимостью информации о фильме
        container.classList.toggle('active');
    });
});


function getTopRatedMovies() {
    fetch(fetchAPIList.fetchTopRatedURL)
        .then(res => res.json())

        .then(data => {
            data.results.forEach(movie => {
                const topRatedMovie = document.createElement('div');
                topRatedMovie.classList.add('individual-movie');

                topRatedMovie.innerHTML = getMovies(movie);

                if (movie.original_language == "en") {
                    topRatedMovies.append(topRatedMovie);
                }
            })
        })
}

getTopRatedMovies();


function getPopularMovies() {
    fetch(fetchAPIList.fetchPopularURL)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(movie => {

                const popularMovie = document.createElement('div');
                popularMovie.classList.add('individual-movie');
                
                popularMovie.innerHTML = getMovies(movie);

                popularMovies.append(popularMovie);
            })
        })
}

getPopularMovies();


function fetchComedyMovies() {
    fetch(fetchAPIList.fetchComedyMovies)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(movie => {

                const comedyMovie = document.createElement('div');
                comedyMovie.classList.add('individual-movie');

                comedyMovie.innerHTML = getMovies(movie);

                comedyMovies.append(comedyMovie);
            })
        })
}

fetchComedyMovies();


function fetchHorrorMovies() {
    fetch(fetchAPIList.fetchHorrorMovies)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(movie => {

                const horrorMovie = document.createElement('div');
                horrorMovie.classList.add('individual-movie');

                horrorMovie.innerHTML = getMovies(movie);

                horrorMovies.append(horrorMovie);
            })
        })
}

fetchHorrorMovies();


// Show the result of movies for search
function showMovies() {
    heroSection.innerHTML = '';
    main.innerHTML = '';
    searchMovies.innerHTML = '';

    fetch(fetchAPIList.searchAPI + searchBar.value)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(movie => {
                console.log(movie.original_title);

                const showMovie = document.createElement('div');
                showMovie.classList.add('individual-movie');

                showMovie.innerHTML = getMovies(movie);

                searchMovies.append(showMovie);
            })
        })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = searchBar.value;

    if (searchTerm) {
        showMovies();
        
        searchBar.value = '';
    }
})