const API_URL =
  "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3453e4f333505e25a94bb1e4724b2fd5&page=1";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'http://api.themoviedb.org/3/search/movie?api_key=3453e4f333505e25a94bb1e4724b2fd5&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
