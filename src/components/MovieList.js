import React, { useContext, useEffect, useState } from 'react';
import Pagination from './Pagination';
import MovieModal from './MovieModal';
import { getImageSrc } from '../utils';
import Modal from './Modal';
import { MoviesContext } from '../MoviesContext';

const MovieList = () => {
    const { movieList, currentPage, setCurrentPage, checkMovieInFavourites, addToFavorite, removeFromFavouriteById } = useContext(MoviesContext);

    const onError = e => {
        e.currentTarget.src = '/images/movie-poster.jpg';
    };

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentMovieIdx, setCurrentMovieIdx] = useState(0);

    const onMovieClick = movieIdx => {
        setIsModalVisible(true);
        setCurrentMovieIdx(movieIdx);
    };

    useEffect(() => {
        setCurrentMovieIdx(0);
    }, [currentPage]);

    const onNextMovieClick = () => {
        if (currentMovieIdx === movieList.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentMovieIdx(currentMovieIdx + 1);
        }
    };

    const onAddToFavorite = () => {
        addToFavorite(movieList[currentMovieIdx]);
    };

    const onRemoveFromFavourite = () => {
        removeFromFavouriteById(movieList[currentMovieIdx].id);
    };


    return <main className="main">
        <p className="main__title">Latest Releases</p>
        <div className="movie-list">
            {
                movieList.map((movie, idx) =>
                    <div className="movie-list__movie" key={movie.id}>
                        <img src={getImageSrc(movie.poster_path)}
                             onError={onError}
                             alt=""
                             className="movie-list__movie-image"
                             title={movie.title}
                             onClick={() => onMovieClick(idx)}
                        />
                    </div>
                )
            }
        </div>;
        <Pagination className=" main__pagination" />
        {
            isModalVisible
                 && <Modal>
                     <MovieModal movie={movieList[currentMovieIdx]}
                                 onClose={() => setIsModalVisible(false)}
                                 onNextMovie={onNextMovieClick}
                                 isMovieInFavourites={checkMovieInFavourites(movieList[currentMovieIdx].id)}
                                 addToFavorite={onAddToFavorite}
                                 removeFromFavourite={onRemoveFromFavourite}
                     />
                 </Modal>
        }
    </main>;
};

export default MovieList;
