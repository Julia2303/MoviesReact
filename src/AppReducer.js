export default (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE_TO_FAVOURITES':
            return {
                ...state,
                favouriteMovies: [action.payload, ...state.favouriteMovies]
            };
        case 'REMOVE_MOVIE_FROM_FAVOURITE':
            return {
                ...state,
                favouriteMovies: state.favouriteMovies.filter(movie => movie.id !== action.payload)
            };
        default: return state;
    }
};
