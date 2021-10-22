const baseImgURL = 'https://image.tmdb.org/t/p/w300';
const baseBackdropURL = 'https://image.tmdb.org/t/p/w500';

export const getImageSrc = posterPath => {
    return `${baseImgURL}${posterPath}`;
};

export const getBackdrop = backdropPath => {
    return `${baseBackdropURL}${backdropPath}`;
};
