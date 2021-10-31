import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { apiKey } from './config';
import { readFavouriteMovies, saveFavouriteMovies } from './storageUtils';

export const MoviesContext = createContext({});

export const MoviesProvider = ({ children }) => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentMovieId, setCurrentMovieId] = useState(null);

    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${currentPage}`)
            .then(response => {
                setMovieList(response.data.results);
                setTotalPages(response.data.total_pages);
                window.scrollTo(0, 0);
                if (currentMovieId) {
                    setCurrentMovieId(response.data.results[0].id);
                }
            });
    }, [currentPage]);

    const addToFavorite = movie => {
        const newFavoriteMovies = [...favoriteMovies, movie];
        setFavoriteMovies(newFavoriteMovies);
        saveFavouriteMovies(newFavoriteMovies);
    };

    const removeFromFavouriteById = id => {
        const newFavoriteMovies = favoriteMovies.filter(movie => movie.id !== id);
        setFavoriteMovies(newFavoriteMovies);
        saveFavouriteMovies(newFavoriteMovies);
    };

    useEffect(() => {
        setFavoriteMovies(readFavouriteMovies());
    }, []);

    const checkMovieInFavourites = id => {
        return favoriteMovies.find(movie => movie.id === id);
    };

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return <MoviesContext.Provider value={
    {
        movieList,
        setMovieList,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        paginate,
        favoriteMovies,
        addToFavorite,
        checkMovieInFavourites,
        removeFromFavouriteById,
        currentMovieId,
        setCurrentMovieId
    }
    }
    >
        {children}
    </MoviesContext.Provider>;
};
