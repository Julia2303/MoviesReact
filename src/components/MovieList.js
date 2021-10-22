import React from 'react';

const MovieList = props => {
    const { movieList, setCurrentMovie, getImageSrc } = props;
    // const baseImgURL = 'https://image.tmdb.org/t/p/w300';

    const onError = e => {
        e.currentTarget.src = '/images/movie-poster.jpg';
    };

    return <div className="movie-list">
        {
            movieList.map(movie =>
                <div className="movie-list__movie" key={movie.id}>
                    <img src={getImageSrc(movie.poster_path)}
                         onError={onError}
                         alt=""
                         className="movie-list__movie-image"
                         title={movie.title} onClick={() => setCurrentMovie(movie)}
                    />
                </div>
            )
        }
    </div>;
};

export default MovieList;
