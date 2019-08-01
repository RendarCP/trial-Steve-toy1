import React, { Component } from 'react';

import Profile from './Profile';
import Chat from '../containers/Chat';
import UserLists from '../containers/UserLists';

class ChatForm extends Component {
  state = {
    email:'',
    phoneNumber:'',
  }

  selectUser = (email, phoneNumber) => {
    this.setState({ email, phoneNumber });
  }

  render() {
    return (
      <div className="chatForm">
        <UserLists selectUser={this.selectUser} />
        <Profile email={this.state.email} phone={this.state.phoneNumber}/>
        <Chat/>
      </div>
    );
  }
}

export default ChatForm;
