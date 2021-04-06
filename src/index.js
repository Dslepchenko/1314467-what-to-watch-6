import App from './components/App';
import ReactDOM from 'react-dom';
import {Movies} from '../src/mocks/mocks';
import React from 'react';
import {getRandomInt} from './mocks/utils';
import Reviews from '../src/mocks/reviews';

const Movie = Movies[getRandomInt(Movies.length)];

ReactDOM.render(
    <App movies={Movies} movie={Movie} reviews={Reviews}/>,
    document.querySelector(`#root`)
);

