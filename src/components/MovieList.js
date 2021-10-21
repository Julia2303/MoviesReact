import React from 'react';

const MovieList = props => {
    const { movieList } = props;
    const baseImgURL = 'https://image.tmdb.org/t/p/w300';

    return <div className="movie-list">
        {
            movieList.map(movie =>
                <div className="movie-list__movie" key={movie.id}>
                    <img src={`${baseImgURL}${movie.poster_path}`} onError={
                            e => {
                                e.currentTarget.src = '/images/movie-poster.jpg';
                            }
                        } alt="" className="movie-list__movie-image" title={movie.title}
                    />
                </div>
            )
        }
    </div>;
};

export default MovieList;
