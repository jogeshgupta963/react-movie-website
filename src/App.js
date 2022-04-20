import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import MovieList from './components/MovieList';
import MovieHeading from './components/MovieHeading';
import SearchBar from './components/SearchBar';
import Favourites from './components/Favourites'
import RemoveFavorites from './components/RemoveFavorites';


const App = () => {
	const [movies, setMovies] = useState([]);
    const [searchVal,setSearchVal] = useState('')
    const [favs, setFavs] = useState([])

    async function getMovieRequest(searchVal){
        const url = `http://www.omdbapi.com/?s=${searchVal}&apikey=36869c0c`
        var {data} = await axios.get(url)
        const {Search} = data
        console.log(Search , data)
        if(Search)
        setMovies(Search)
    }

    // function saveToLS(item){
    //     localStorage.setItem('react-movie-app-favourites',JSON.stringify(item))
    // }

    function addFavMovie(movie){
        const newFav = [...favs,movie]
        setFavs(newFav);
        // saveToLS(newFav)
    }
    function removeFavMovie(movie){
            const newFav = favs.filter(fav => fav.imdbID !== movie.imdbID)
            setFavs(newFav);
    }


    useEffect(() => {
        getMovieRequest(searchVal)
    }, [searchVal])

    // useEffect(()=>{
    //     const movieFavourites =JSON.parse(localStorage.getItem('react-movie-app-favourites'))

        // if(movieFavourites)
        // setFavs(movieFavourites)
    // },[])

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieHeading heading='Movies' />
                <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
            </div>
            
			<div className='row'>
				 <MovieList
					movies={movies}
                    favMovie={addFavMovie}
                    favComponent={Favourites}
				/>
			</div>

            <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieHeading heading='Favourites' />
            </div>

            <div className='row'>
				 <MovieList
					movies={favs}
                    favComponent={RemoveFavorites}
                    favMovie={removeFavMovie}
				/>
			</div>
		</div>
	);
};



export default App;
