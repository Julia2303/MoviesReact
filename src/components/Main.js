import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import axios from 'axios';
import Pagination from './Pagination';

const Main = () => {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        axios.get(
            'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page=1')
            .then(response => {
                setMovieList(response.data.results);
            });
    }, [setMovieList]);
    return <main className="main">
        <p className="main__title">Latest Releases</p>
        <MovieList movies={movieList} />
        <Pagination />
    </main>;
};

export default Main;
