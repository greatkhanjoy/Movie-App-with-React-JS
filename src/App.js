import { useEffect, useState } from 'react'
import './App.css'

import MovieCard from './MovieCard'

const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const API_URL = 'http://www.omdbapi.com/?apikey=10f37605'

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies('Avengers')
  }, [])

  return (
    <div className="container">
      <h2> Movie App</h2>
      <div className="search">
        <input
          id="search"
          type="text"
          placehodler="Search Movie"
          onChange={(e) => searchMovies(e.target.value)}
        />
        <button
          onClick={() => {
            searchMovies('Avengers')
            document.getElementById('search').value = ''
          }}
        >
          Reset
        </button>
      </div>
      {movies?.length > 0 ? (
        <div className="movies">
          {movies.map((movie) => (
            <MovieCard
              Title={movie.Title}
              Poster={movie.Poster}
              Year={movie.Year}
            />
          ))}
        </div>
      ) : (
        <div className="notfound">
          <h3>No Movies Found</h3>
        </div>
      )}
    </div>
  )
}

export default App
