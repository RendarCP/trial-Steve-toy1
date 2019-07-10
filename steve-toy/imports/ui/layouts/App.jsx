import React from 'react';
import Headers from '../components/Header.js';
// import Postlist from '../components/PostList.js';
// import Chatform from '../components/ChatForm.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import login from '../pages/Login';
// import signup from '../pages/SignUp';
import {login , signup} from '../pages/index.js';
import Home from '../components/Home.js';
import PostWrite from '../pages/PostWrite.js';

const App = () => (
  <div>
    <div>
    <Router>
      <Headers/>
      {/* <Chatform/>
      <Postlist/> */}
            <Switch>
              <Route path="/postwrite" component={PostWrite}/>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={login}/>
              <Route path="/signup" component={signup}/>
            </Switch>
    </Router>
    </div>
  </div>
);

export default App;
