import React, { useEffect, useState } from 'react';
import { apiKey } from '../config';
import MovieList from './MovieList';
import axios from 'axios';
import Pagination from './Pagination';

const Main = () => {
    const [movieList, setMovieList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${currentPage}`)
            .then(response => {
                setMovieList(response.data.results);
                setTotalPages(response.data.total_pages);
            });
    }, [currentPage]);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return <main className="main">
        <p className="main__title">Latest Releases</p>
        <MovieList movieList={movieList} />
        <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} classname="main__pagination" />
    </main>;
};

export default Main;
