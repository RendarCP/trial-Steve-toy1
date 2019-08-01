import React from 'react';
import Headers from '../components/Header.js';
// import Postlist from '../components/PostList.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { login , signup, postwrite, postdetail, favoriteposts } from '../pages/index.js';
import Home from '../components/Home.js';

const App = () => (
  <div>
    <Router>
      <Headers />
        <Switch>
          <Route path="/postwrite" component={postwrite}/>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={login}/>
          <Route path="/signup" component={signup}/>
          <Route path="/post/:id" component={postdetail}/>
          <Route path="/postupdate/:id" component={postwrite}/>
          <Route path="/favorite" component={favoriteposts}/>
          <Route path="/userinfo/:id" component={signup}/>
        </Switch>
    </Router>
  </div>
);

export default App;