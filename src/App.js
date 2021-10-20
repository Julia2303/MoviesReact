import './style/main.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import MovieList from './components/MovieList';

function App() {

    return <div className="app">
        <Header />
        <Main />
    </div>;
}

export default App;
