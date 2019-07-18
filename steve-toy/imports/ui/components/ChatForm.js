import React, { Component } from 'react';
import { Input,List, Image,Button,Form, TextArea,Grid } from 'semantic-ui-react'
import ChatUser from '../pages/ChatUser';
import Chat from '../pages/Chat';
class ChatForm extends Component {
    render() {
        return (
            <div className="chatForm">
                <div className="chatList">
                    <ChatUser/>
                </div>
                <div className="chatProfile">
                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='tiny' circular />
                    <Button primary>번호</Button>
                    <Button secondary>이메일</Button>
                </div>
                <div className="chatting">
                     {/* <Form className="Chat">
                        <Form.Field label="채팅방" control='textarea' rows='3' />
                    </Form> */}
                    <Chat/>
                </div>
            </div>
        );
    }
}

export default ChatForm;