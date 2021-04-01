import App from './components/App';
import ReactDOM from 'react-dom';
import {Movies} from '../src/mocks/mocks';
import React from 'react';
import {getRandomInt} from './mocks/utils';

const Movie = Movies[getRandomInt(Movies.length)];

ReactDOM.render(
    <App movies={Movies} movie={Movie}/>,
    document.querySelector(`#root`)
);

