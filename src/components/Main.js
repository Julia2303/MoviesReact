import React, { useEffect, useState } from 'react';
import { apiKey } from '../config';
import MovieList from './MovieList';
import axios from 'axios';
import Pagination from './Pagination';
import Modal from './Modal';

const Main = () => {
    const [movieList, setMovieList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [modal, setModal] = useState(false);
    const [currentMovie, setCurrentMovie] = useState('');

    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${currentPage}`)
            .then(response => {
                setMovieList(response.data.results);
                setTotalPages(response.data.total_pages);
            });
    }, [currentPage]);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const openMovie = (modal, currentMovie) => {
        setModal(modal);
        setCurrentMovie(currentMovie);
    };

    return <main className="main">
        <p className="main__title">Latest Releases</p>
        <MovieList movieList={movieList} openMovie={openMovie} />
        <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} className="main__pagination" />
        <Modal modal={modal} setModal={setModal} currentMovie={currentMovie} />
    </main>;
};

export default Main;
