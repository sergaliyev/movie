// Show TV Series

import { fetchTVAPIList } from "./apiList.js";
import { IMG_PATH } from "./apiList.js";

const latestTV = document.querySelector('.latest-TV');
const airingTV = document.querySelector('.now-playing-tv');
const popularTVSeries = document.querySelector('.popular-tv');
const topRatedTVSeries = document.querySelector('.top-rated-tv');

const searchMovies = document.querySelector('.search-movies');
const main = document.getElementById('main');
const form = document.querySelector("#form");
const searchBar = document.querySelector("#search");
const heroSection = document.querySelector('.hero-section');

const toggleBtn = document.querySelector('.toggle-btn');
const navbarLinks = document.querySelector('.navbar-links');

//Open or close navigation menu (mobile devices)
toggleBtn.addEventListener('click', function toggleNavMenu() {
    navbarLinks.classList.toggle('active');
})


// TV
function getRandomNowPlayingTV() {
    fetch(fetchTVAPIList.fetchPopularTV)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.results.length);

            const latestTVSeries = document.createElement('div');

            latestTVSeries.classList.add('latest-movie-backdrop');

            latestTVSeries.style.backgroundImage = `url(${IMG_PATH + data.results[randomIndex].backdrop_path})`

            latestTVSeries.innerHTML = 
            `<h2>${data.results[randomIndex].original_name}</h2>

            <p>${data.results[randomIndex].vote_average} <i class="fas fa-star"></i></p>
            
            <p class="movie-overview">${data.results[randomIndex].overview}</p>`
            
            latestTV.append(latestTVSeries);
        })
}

getRandomNowPlayingTV();


// Fetch all the movies for the related fetch API
function getTV(TV) {
    return `<img class="movie-image" src="${IMG_PATH + TV.poster_path}"></img>    
    <div class="movie-info">
    <h3>${TV.original_name}</h3>
    <div class="rating">
    <p>${TV.vote_average} <i class="fas fa-star"></i></p>
    <div>
    </div>`;
}


function getNowPlayingTV() {
    fetch(fetchTVAPIList.fetchAiringTV)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(TV => {

                const nowPlayingTV = document.createElement('div');

                nowPlayingTV.classList.add('individual-movie');
            
                nowPlayingTV.innerHTML = getTV(TV);

                airingTV.append(nowPlayingTV);
            })
        })
}

getNowPlayingTV();


function getPopularTV() {
    fetch(fetchTVAPIList.fetchPopularTV)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(TV => {

                const popularTV = document.createElement('div');
                popularTV.classList.add('individual-movie');
                
                popularTV.innerHTML = getTV(TV);

                popularTVSeries.append(popularTV);
            })
        })
}

getPopularTV();


function getNetflixOriginals() {
    fetch(fetchTVAPIList.fetchNetflixOriginals)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(TV => {
                const topRatedTV = document.createElement('div');
                topRatedTV.classList.add('individual-movie');

                topRatedTV.innerHTML = getTV(TV);

                if (TV.original_language == "en") {
                    topRatedTVSeries.append(topRatedTV);
                }
            })
        })
}

getNetflixOriginals();

// Search a TV series function
function showTVSeries() {
    heroSection.innerHTML = '';
    main.innerHTML = '';
    searchMovies.innerHTML = '';

    fetch(fetchTVAPIList.searchTV + searchBar.value)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(TV => {
                // console.log(movie.original_title);

                const showMovie = document.createElement('div');
                showMovie.classList.add('individual-movie');

                showMovie.innerHTML = getTV(TV);

                searchMovies.append(showMovie);
            })
        })
}

//Submit the form of search input bar
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = searchBar.value;

    if (searchTerm) {
        showTVSeries();
        
        searchBar.value = '';
    }
})