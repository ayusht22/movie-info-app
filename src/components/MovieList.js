import React from 'react'

const MovieList=(props)=>{
    const Fav=props.addFav;
    return (
        <>
           	{props.movies.map((movie, index) => {
			return movie.Poster?<div className='image-container d-flex justify-content-start m-3' key={movie.imdbID}>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
					<Fav movie={movie}/>
					</div>
				</div>:null
			})}
        </>
    );
};

export default MovieList
