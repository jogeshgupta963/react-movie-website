import React from 'react';
import Favourites from './Favourites';

// const MovieList = ({movies,favouriteComponent,favMovie}) => {
const MovieListRemove = ({movies,favMovie}) => {

	return (
		<>
			{movies.map((movie) => (
				<div  className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>

					<div className="overlay d-flex align-items-center justify-content-center"
					onClick={()=>favMovie(movie)}
					>
					<Favourites/>
					
					</div>

				</div>

			))}
		</>
	);
};

export default MovieListRemove;
