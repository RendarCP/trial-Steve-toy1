import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import ChatUser from '../pages/ChatUser';
import Chat from '../pages/Chat';
import DetailUser from '../components/DetailUser';
class ChatForm extends Component {
    state={
        email:'',
        phoneNumber:'',
    }
    userForm=(email,phoneNumber)=>{
        // console.log 
        this.setState({
            email: email,
            phoneNumber: phoneNumber,
        })
    }
    // email={this.state.email} phone={this.state.phoneNumber}
    render() {
        return (
            <div className="chatForm">
                <ChatUser onChange={this.userForm}/>
                <DetailUser email={this.state.email} phone={this.state.phoneNumber}/>
                <Chat/>
            </div>
        );
    }
}

export default ChatForm;