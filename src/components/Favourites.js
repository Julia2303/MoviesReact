import React, { useContext, useState } from 'react';
import { MoviesContext } from '../MoviesContext';
import { getImageSrc } from '../utils';
import Modal from './Modal';
import MovieModal from './MovieModal';

const Favourites = () => {
    const { favoriteMovies, removeFromFavouriteById, checkMovieInFavourites } = useContext(MoviesContext);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentMovieIdx, setCurrentMovieIdx] = useState(0);

    const onMovieClick = movieIdx => {
        setIsModalVisible(true);
        setCurrentMovieIdx(movieIdx);
    };

    const onNextMovieClick = () => {
        if (currentMovieIdx + 1 === favoriteMovies.length) {
            setCurrentMovieIdx(0);
        } else {
            setCurrentMovieIdx(currentMovieIdx + 1);
        }
    };

    const onRemoveFromFavourite = () => {
        removeFromFavouriteById(favoriteMovies[currentMovieIdx].id);
    };

    return <main className="main">
        <p className="main__title">My favourite</p>
        <div className="favourite-movies">
            {
                favoriteMovies.map((movie, idx) =>
                    <div className="favourite-movies__movie" key={movie.id}>
                        <img src={getImageSrc(movie.poster_path)}
                             alt=""
                             className="favourite-movies__movie-image"
                             title={movie.title}
                             onClick={() => onMovieClick(idx)}
                        />
                        <div className="favourite-movies__info">
                            <div className="favourite-movies__top-info">
                                <h2 className="favourite-movies__title">{movie.title}</h2>
                                <button className="favourite-movies__button" onClick={() => removeFromFavouriteById(movie.id)}>Unfavourite</button>
                            </div>
                            <p className="favourite-movies__description">
                                {movie.overview}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
        {
            isModalVisible
            && <Modal>
                <MovieModal movie={favoriteMovies[currentMovieIdx]}
                            onClose={() => setIsModalVisible(false)}
                            onNextMovie={onNextMovieClick}
                            isMovieInFavourites={checkMovieInFavourites(favoriteMovies[currentMovieIdx].id)}
                            removeFromFavourite={onRemoveFromFavourite}
                />
            </Modal>
        }
    </main>;
};

export default Favourites;
