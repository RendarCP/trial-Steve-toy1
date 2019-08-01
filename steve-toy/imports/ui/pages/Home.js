import React, { Component } from 'react';
import CharForm from '../components/ChatForm';
import PostCardLists from '../conatainers/PostCardLists';
import MainLayout from '../layouts/mainlayout';

class Home extends Component {
  render() {
    return (
      <div>
        <ChatForm/>
        <PostCardLists/>
      </div>
    );
  }
}

export default MainLayout(Home);
