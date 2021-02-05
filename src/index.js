import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MOVIE_TITLES = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];
const MOVIE_GENRES = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];
const MAIN_TITLE = `The Grand Budapest Hotel`;
const MAIN_GENRE = `Drama`;
const MAIN_YEAR = `2014`;
const AVATAR_IMAGES = [`img/avatar.jpg`];
const MOVIES_IMAGES = [`img/bg-the-grand-budapest-hotel.jpg`];
const SHOW_MORE_BTN = `Show more`;

ReactDOM.render(
    <App
      title = {MAIN_TITLE}
      genre = {MAIN_GENRE}
      year = {MAIN_YEAR}
      titles = {MOVIE_TITLES}
      genres = {MOVIE_GENRES}
      avatar = {AVATAR_IMAGES}
      bgImage = {MOVIES_IMAGES}
      showMoreBtn = {SHOW_MORE_BTN}
    />,
    document.querySelector(`#root`)
);
