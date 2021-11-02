import React, { createContext, useEffect, useState, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
import { apiKey } from './config';
import { readFavouriteMovies, saveFavouriteMovies } from './storageUtils';

//initial state
const initialState = {
    favouriteMovies: readFavouriteMovies('favouriteMovies')
};

//create context
export const MoviesContext = createContext(initialState);

//provider components
export const MoviesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

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

    //actions
    const addToFavourite = movie => {
        dispatch({ type: 'ADD_MOVIE_TO_FAVOURITES', payload: movie });
    };

    const removeFromFavouriteById = id => {
        dispatch({ type: 'REMOVE_MOVIE_FROM_FAVOURITE', payload: id });
    };

    useEffect(() => {
        saveFavouriteMovies(state.favouriteMovies);
    }, [state]);

    const checkMovieInFavourites = id => {
        return state.favouriteMovies.find(movie => movie.id === id);
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
        favouriteMovies: state.favouriteMovies,
        addToFavourite,
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
