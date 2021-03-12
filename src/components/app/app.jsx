import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {PATH} from '../../mocks/utils';
import Film from '../film/film';
import Main from '../Main/Main';
import MyList from '../my-list/my-list';
import SingIn from '../sing-in/sing-in';
import AddReview from '../add_review/add_review';
import Player from '../player/player';

const App = ({...props}) =>
  <BrowserRouter>
    <Switch>
      <Route exact path={PATH.MAIN}>
        <Main {...props}/>
      </Route>
      <Route exact path={PATH.SIGN_IN}>
        <SingIn/>
      </Route>
      <Route exact path={PATH.FILM}>
        <Film {...props}/>
      </Route>
      <Route exact path={PATH.MY_LIST}>
        <MyList {...props}/>
      </Route>
      <Route exact path={PATH.REVIEW}>
        <AddReview {...props}/>
      </Route>
    </Switch>
    <Route exact path={PATH.PLAYER}>
      <Player/>
    </Route>
  </BrowserRouter>;

export default App;
