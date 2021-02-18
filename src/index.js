import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getRandomMovie, getMovies} from './mocks/mocks';

ReactDOM.render(
    <App movie = {getRandomMovie()} movies = {getMovies()}/>,
    document.querySelector(`#root`)
);

