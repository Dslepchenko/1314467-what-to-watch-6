import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './main';
import MyList from './Catalog/My_List';
import MoviePage from './Movie_Page/Movie_Page';
import AddReview from './Review/Add_Review';
import SingIn from './Sing-In';
import Player from './Player';
import {findMovieById, RoutePaths} from '../mocks/utils';

const App = (props) =>
  <BrowserRouter>
    <Switch>
      <Route exact path={RoutePaths.MAIN}>
        <Main {...props}/>
      </Route>
      <Route exact path={RoutePaths.SIGN_IN}>
        <SingIn/>
      </Route>
      <Route exact path={RoutePaths.MY_LIST}>
        <MyList {...props}/>
      </Route>
      <Route exact path={`${RoutePaths.MOVIE_PAGE}/:id`}
        render={(routeProps) => (
          <MoviePage
            {...routeProps}
          />
        )}
      />
      <Route exact path={`${RoutePaths.MOVIE_PAGE}/:id${RoutePaths.REVIEW}`}
        render={(routeProps) => (
          <AddReview
            {...routeProps}
          />
        )}
      />
      <Route exact path={`${RoutePaths.PLAYER}/:id`}
        render={(routeProps) => (
          <Player
            {...findMovieById(routeProps)}
          />
        )}
      />
    </Switch>
  </BrowserRouter>;

export default App;
