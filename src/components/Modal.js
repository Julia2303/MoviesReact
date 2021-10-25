import React from 'react';
import { getBackdrop } from '../utils';
import ArrowDown from './elements/Arrow';

const Modal = props => {
    const { currentMovie, setCurrentMovie, className, getImageSrc, changeMovie } = props;

    const fixScore = () =>
        Number.isInteger(currentMovie.vote_average)
            ? ` ${currentMovie.vote_average}.0`
            : ` ${currentMovie.vote_average}`
    ;

    return <div className={`movie-modal${className}`} style={{ backgroundImage: `url(${getBackdrop(currentMovie.backdrop_path)})` }}>
        <div className="movie-modal__container">
            <header className="movie-modal__header">
                <div className="movie-modal__header-button" onClick={() => setCurrentMovie(null)}>
                    <ArrowDown className="movie-modal__header-icon" />
                    <p className="movie-modal__header-button-text">
                        Back to List
                    </p>
                </div>
                <div className="movie-modal__header-button">
                    <p className="movie-modal__header-button-text" onClick={() => changeMovie()}>Next Movie</p>
                    <ArrowDown className="movie-modal__header-icon" />
                </div>
            </header>
            <div className="movie-modal__content">
                <img className="movie-modal__poster" src={getImageSrc(currentMovie.poster_path)} />
                <div className="movie-modal__info">
                    <button className="movie-modal__button">Add to favourite</button>
                    <h2 className="movie-modal__title">{currentMovie.title}</h2>
                    <div className="movie-modal__details">
                        <p className="movie-modal__score">Score:{fixScore()}</p>
                        <p className="movie-modal__release-date">Release Date: {currentMovie.release_date}</p>
                    </div>
                    <p className="movie-modal__description">
                        {currentMovie.overview}
                    </p>
                </div>
            </div>
        </div>
    </div>;
};

export default Modal;
