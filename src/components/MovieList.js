import React from 'react';

const MovieList = ({movies,favouriteComponent,favMovie}) => {

	const FavouriteComponent = favouriteComponent;
	return (
		<>
			{movies.map((movie) => (
				<div  className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>

					<div className="overlay d-flex align-items-center justify-content-center"
					onClick={()=>favMovie(movie)}
					>
					<FavouriteComponent />
					</div>

				</div>

			))}
		</>
	);
};

export default MovieList;
