import React, { useEffect, useState } from 'react';
import { apiKey } from '../config';
import MovieList from './MovieList';
import axios from 'axios';
import Pagination from './Pagination';
import Modal from './Modal';
import { getImageSrc } from '../utils';

const Main = () => {
    const [movieList, setMovieList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [currentMovie, setCurrentMovie] = useState(null);

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
        <MovieList movieList={movieList} setCurrentMovie={setCurrentMovie} getImageSrc={getImageSrc} />
        <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} className=" main__pagination" />
        {
            currentMovie
                ? <Modal currentMovie={currentMovie}
                         setCurrentMovie={setCurrentMovie}
                         getImageSrc={getImageSrc}
                         className=" modal"
                />
                : null
        }
    </main>;
};

export default Main;
