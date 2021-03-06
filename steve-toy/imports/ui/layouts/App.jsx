import React from 'react';
import Headers from '../components/Header.js';
// import Postlist from '../components/PostList.js';
// import Chatform from '../components/ChatForm.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import login from '../pages/Login';
// import signup from '../pages/SignUp';
import {login , signup,postwrite,postdetail,favoritepost} from '../pages/index.js';
import Home from '../components/Home.js';

const App = () => (
  <div>
      <Router>
          <Headers/>
              <Switch>
                <Route path="/postwrite" component={postwrite}/>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={login}/>
                <Route path="/signup" component={signup}/>
                <Route path="/post/:id" component={postdetail}/>
                <Route path="/postupdate/:id" component={postwrite}/>
                <Route path="/favorite" component={favoritepost}/>
                <Route path="/userinfo/:id" component={signup}/>
              </Switch>
      </Router>
  </div>
);

export default App;