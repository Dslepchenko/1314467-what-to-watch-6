import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './main';
import MyList from './Catalog/My_List';
import MoviePage from './Movie_Page/Movie_Page';
import AddReview from './Review/Add_Review';
import SingIn from './Sing-In';
import Player from './Player';
import {getMovieById, RoutePaths} from '../mocks/utils';

const App = (props) =>
  <BrowserRouter>
    <Switch>
      <Route exact path={`/`}>
        <Main {...props}/>
      </Route>
      <Route exact path={`/login`}>
        <SingIn/>
      </Route>
      <Route exact path={RoutePaths.MY_LIST}>
        <MyList {...props}/>
      </Route>
      <Route exact path={`${RoutePaths.MOVIE_PAGE}/:id`}
        render={(routeProps) => (
          <MoviePage
            {...getMovieById(routeProps)}
          />
        )}
      />
      <Route exact path={`${RoutePaths.MOVIE_PAGE}/:id${RoutePaths.REVIEW}`}
        render={(routeProps) => (
          <AddReview
            {...getMovieById(routeProps)}
          />
        )}
      />
      <Route exact path={`${RoutePaths.PLAYER}/:id`}>
        <Player/>
      </Route>
    </Switch>
  </BrowserRouter>;

export default App;
