import React, { Component } from 'react';

import Profile from './Profile';
import Chat from '../containers/Chat';
import UserLists from '../containers/UserLists';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class ChatForm extends Component {
  state = observable({
    email: '',
    phoneNumber: '',
  });

  selectUser = (email, phoneNumber) => {
    this.state.email = email;
    this.state.phoneNumber = phoneNumber;
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

export default observer(ChatForm);
