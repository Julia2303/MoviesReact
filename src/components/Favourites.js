import React, { useContext } from 'react';
import { MoviesContext } from '../MoviesContext';
import { getImageSrc } from '../utils';
import Modal from './Modal';
import MovieModal from './MovieModal';

const Favourites = () => {
    const { favoriteMovies, removeFromFavouriteById, checkMovieInFavourites, currentMovieId, setCurrentMovieId } = useContext(MoviesContext);

    const onMovieClick = movieId => {
        setCurrentMovieId(movieId);
    };

    const onNextMovieClick = () => {
        if (currentMovieId === favoriteMovies[favoriteMovies.length - 1].id) {
            setCurrentMovieId(favoriteMovies[0].id);
        } else {
            const nextMovieId = favoriteMovies.reduce((acc, movie, index) => {
                if (currentMovieId === movie.id) {
                    acc = favoriteMovies[index + 1].id;
                }
                return acc;
            }, null);
            setCurrentMovieId(nextMovieId);
        }
    };

    const onRemoveFromFavourite = () => {
        removeFromFavouriteById(currentMovieId);
        if (favoriteMovies.length > 1) {
            onNextMovieClick();
        } else {
            setCurrentMovieId(null);
        }
    };

    return <main className="main">
        <p className="main__title">My favourite</p>
        <div className="favourite-movies">
            {
                favoriteMovies.map(movie =>
                    <div className="favourite-movies__movie" key={movie.id}>
                        <img src={getImageSrc(movie.poster_path)}
                             alt=""
                             className="favourite-movies__image"
                             title={movie.title}
                             onClick={() => onMovieClick(movie.id)}
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
            currentMovieId
            && <Modal>
                <MovieModal movie={favoriteMovies.find(movie => movie.id === currentMovieId)}
                            onClose={() => setCurrentMovieId(null)}
                            onNextMovie={onNextMovieClick}
                            isMovieInFavourites={checkMovieInFavourites(currentMovieId)}
                            removeFromFavourite={onRemoveFromFavourite}
                />
            </Modal>
        }
    </main>;
};

export default Favourites;
