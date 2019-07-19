import React, { Component } from 'react';
import { Input,List, Image,Button,Form, TextArea,Grid } from 'semantic-ui-react'
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
                <div className="chatList">
                    <ChatUser onChange={this.userForm}/>
                </div>
                {/* <div className="chatProfile"> */}
                    <DetailUser email={this.state.email} phone={this.state.phoneNumber}/>
                {/* </div> */}
                <div className="chatting">
                    <Chat/>
                </div>
            </div>
        );
    }
}

export default ChatForm;