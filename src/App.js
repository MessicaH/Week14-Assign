import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';
import {useEffect, useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import RatingComment from "./RatingComment";
import RatingCard from "./RatingCard";

function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=630634b54a927260806f04aebc00ede7"

  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=630634b54a927260806f04aebc00ede7&query="

  const [movies, setMovies] = useState([])
  const [term, setTerm] = useState("")

  useEffect (() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  console.log(movies);

  const handleSearch = (event) => {
    event.preventDefault()

    fetch(API_SEARCH + term)
    .then(response => response.json())
    .then(data => setMovies(data.results))
  }

  return (
    <div className="App">
      <div className='searchbar'>
        <div className='movieHeader'>
          <h1>Movie React-ion App<svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
</svg></h1>
        </div>

        <div>
          <form onSubmit={handleSearch}>
            <input type="text" onChange={(event) => setTerm(event.target.value)}
            className='searchKeyword' placeholder='Search for a movie title...'/>
            <button className='searchButton btn btn-primary'>Search</button>
          </form>
        </div>
      </div>
      
      <div className='movies'>
        {movies.map((movies) =>
          <MovieCard {...movies} />
        )}
      </div>
      <div className='TMDBLogo col-sm'></div>
    </div>
  );
}

export default App;
