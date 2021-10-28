export const saveFavouriteMovies = favouriteMovies => {
    const moviesString = JSON.stringify(favouriteMovies);
    localStorage.setItem('favouriteMovies', moviesString);
};

export const readFavouriteMovies = () => {
    const moviesString = localStorage.getItem('favouriteMovies');
    if (moviesString) {
        return JSON.parse(moviesString);
    } else {
        return [];
    }
};
