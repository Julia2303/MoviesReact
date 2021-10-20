import React from 'react';

function MovieList(props) {
    const { movies } = props;
    const baseImgUrl = 'https://image.tmdb.org/t/p/w300';
    return <div className="movie-list">
        {
            movies.map(movie =>
                <div className="movie-list__movie" key={movie.id}>
                    <img src={`${baseImgUrl}${movie.poster_path}`} alt="" className="movie-list__movie-image" />
                </div>
            )
        }
    </div>;
}

export default MovieList;
