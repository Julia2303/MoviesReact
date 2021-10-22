import React from 'react';

const Modal = props => {
    const { modal, setModal, currentMovie } = props;
    const baseImgURL = 'https://image.tmdb.org/t/p/w300';

    console.log(currentMovie);
    return <div className={`modal ${modal ? 'modal--active' : ''}`}>
        <header className="modal__header">
            <div className="modal__header-button" onClick={() => setModal(false)}>Back to List</div>
            <div className="modal__header-button">Next Movie</div>
        </header>
        <div className="modal__movie-content">
            <img className="modal__movie-poster" src={`${baseImgURL}${currentMovie.poster_path}`} />
            <div className="modal__movie-info">
                <button className="modal__button">Add to favourite</button>
                <p className="modal__movie-title">{currentMovie.title}</p>
                <div className="movie-modal__movie-details">
                    <p className="movie-modal__movie-score">Score: {currentMovie.vote_average}</p>
                    <p className="movie-modal__movie-release-date">Release Date: {currentMovie.release_date}</p>
                </div>
                <p className="movie-modal__movie-description">{currentMovie.overview}</p>
            </div>
        </div>
    </div>;
};

export default Modal;
