import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import Profile from './Profile';

import Chat from '../containers/Chat'
import UserLists from '../containers/UserLists';
class ChatForm extends Component {
    state={
        email:'',
        phoneNumber:'',
    }
    selectUser = (email,phoneNumber) => {
        // console.log 
        this.setState({
            email,phoneNumber});
    }
    // email={this.state.email} phone={this.state.phoneNumber}
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