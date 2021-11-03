import React from 'react';
import { getBackdrop } from '../utils';
import ArrowDown from './elements/Arrow';
import { getImageSrc } from '../utils';

const MovieModal = props => {
    const { movie, onClose, onNextMovie, isMovieInFavourites, addToFavourite, removeFromFavourite } = props;

    return <div className="movie-modal" style={{ backgroundImage: `url(${getBackdrop(movie.backdrop_path)})` }}>
        <div className="movie-modal__container">
            <header className="movie-modal__header">
                <div className="movie-modal__header-button" onClick={onClose}>
                    <ArrowDown className="movie-modal__header-icon" />
                    <p className="movie-modal__header-button-text">
                        Back <span className="hide-on-mobile">to List</span>
                    </p>
                </div>
                <div className="movie-modal__header-button" onClick={onNextMovie}>
                    <p className="movie-modal__header-button-text">
                        Next <span className="hide-on-mobile">Movie</span>
                    </p>
                    <ArrowDown className="movie-modal__header-icon" />
                </div>
            </header>
            <div className="movie-modal__content">
                <img className="movie-modal__poster" src={getImageSrc(movie.poster_path)} />
                <div className="movie-modal__info">
                    {
                        isMovieInFavourites
                            ? <button className="movie-modal__button" onClick={removeFromFavourite}>
                                Remove <span className="hide-on-mobile">from favourite</span>
                            </button>
                            : <button className="movie-modal__button" onClick={addToFavourite}>
                                Add <span className="hide-on-mobile">to favourite</span>
                            </button>
                    }
                    <h2 className="movie-modal__title">{movie.title}</h2>
                    <div className="movie-modal__details">
                        <div className="movie-modal__score">
                            <p className="movie-modal__details-title">Score: </p>
                            <p className="movie-modal__details-value">{movie.vote_average.toFixed(1)}</p>
                        </div>
                        <div className="movie-modal__release-date">
                            <p className="movie-modal__details-title">Release Date: </p>
                            <p className="movie-modal__details-value">{movie.release_date}</p>
                        </div>
                    </div>
                </div>
                <h2 className="movie-modal__title--mobile">{movie.title}</h2>
                <div className="movie-modal__description-container">
                    <p className="movie-modal__description">
                        {movie.overview}
                    </p>
                </div>
            </div>
        </div>
    </div>;
};

export default MovieModal;
