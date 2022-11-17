
import React, {useState, useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//530572a3
const API_URL = "https://www.omdbapi.com/?apikey=530572a3"

const movie1 = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([])

  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=spiderman`)
    const data = await response.json()
    console.log(data.Search);
    setMovies(data.Search)
   
  }
  useEffect(() => {
    searchMovies('Spiderman')
    
  }, [])
  console.log(movies)
  console.log(movies.length)
  return (
    
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input type="text" placeholder='Search for movies' value="Superman" onChange={()=>{}} />
          <img src={SearchIcon} alt="search" onClick={()=> {}} />
        </div>

        {movies.length > 0 ? 
        (
          <div className="container">
            {movies.map((movieObj)=>{
              // console.log("inside map", movieObj);
             return < MovieCard movie={movieObj}/>
            })}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
       
      </div>
    
  )
}

export default App
