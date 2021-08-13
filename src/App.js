import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React,{useState,useEffect} from 'react'
import MovieList from './components/MovieList'
import Search from './components/Search'
import MovieListHeading from "./components/MovieListHeading";
import AddFav from "./components/AddFav";
import RemoveFavourites from "./components/RemoveFavourites";
function App() {
const [movies,SetMovies]=useState([]);
const [favourites, setFavourites] = useState([]);
const [input,SetInput]=useState('');
const CallMovie=async(input)=>{
  const key=process.env.REACT_APP_APIKEY
  const url=`https://www.omdbapi.com/?s=${input}&apikey=${key}`;
  const data=await fetch(url)
  const jsonData=await data.json()
  if(jsonData.Search){
  SetMovies(jsonData.Search)
  }
}

useEffect(() => {
  CallMovie(input);
}, [input])
useEffect(() => {
  const movieFavourites = JSON.parse(
    localStorage.getItem('react-movie-app-favourites')
  );

  if (movieFavourites) {
    setFavourites(movieFavourites);
  }
}, []);

const saveToLocalStorage = (items) => {
  localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
};

const addFavouriteMovie = (movie) => {
  const newFavouriteList = [...favourites, movie];
  setFavourites(newFavouriteList);
  saveToLocalStorage(newFavouriteList);
};

const removeFavouriteMovie = (movie) => {
  const newFavouriteList = favourites.filter(
    (favourite) => favourite.imdbID !== movie.imdbID
  );

  setFavourites(newFavouriteList);
  saveToLocalStorage(newFavouriteList);
};

  return (
    <div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4 '>
				<MovieListHeading heading='Movies' />
				<Search input={input} SetInput={SetInput} />
			</div>
			<div className="row ">
				<MovieList
					movies={movies}
					addFav={AddFav}
          handleFavouritesClick={addFavouriteMovie}
				/>
			</div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					addFav={RemoveFavourites}
				/>
			</div>
     </div>

  );
}

export default App;
