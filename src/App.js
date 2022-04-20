import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';


const App = () => {
	const [movies, setMovies] = useState([]);
    const [searchVal,setSearchVal] = useState('')

    async function getMovieRequest(){
        const url = `http://www.omdbapi.com/?s=avengers&apikey=36869c0c`
        var {data} = await axios.get(url)
        const {Search} = data
        setMovies(Search)
    }
    useEffect(() => {
        getMovieRequest()
    }, [])
	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
                
            </div>
            
			<div className='row'>
				<MovieList
					movies={movies}
				/>
			</div>
		</div>
	);
};



export default App;
