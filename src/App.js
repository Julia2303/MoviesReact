import './style/main.scss';
import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import { Route } from 'react-router-dom';
import Favourites from './components/Favourites';
import { MoviesProvider } from './MoviesContext';

function App() {
    return <MoviesProvider>
        <div className="app">
            <Header />
            <Route exact path="/" component={MovieList} />
            <Route path="/favourites" component={Favourites} />
        </div>
    </MoviesProvider>
    ;
}

export default App;
