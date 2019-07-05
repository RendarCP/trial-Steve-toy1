import React from 'react';
import Headers from '../components/Header.js';
import Postlist from '../components/PostList.js';
import Chatform from '../components/ChatForm.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import login from '../pages/Login';
// import signup from '../pages/SignUp';
import {login , signup, Home} from '../pages/index.js';

const App = () => (
  <div>
    {/* <div>
      <Headers/>
      <Chatform/>
      <Postlist/>
    </div> */}
    <div>
    <Router>
      <Headers/>
      {/* <Chatform/>
      <Postlist/> */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={login}/>
              <Route path="/signup" component={signup}/>
            </Switch>
    </Router>
    </div>
  </div>
);

export default App;
