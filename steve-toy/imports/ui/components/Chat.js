import React, { Component } from 'react';
import { Input, List, Button, Form } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import Message from './Message';

export default class Chat extends Component {
  state = {
    chatting:'',
  }

  handleChange = (e) => {
    this.setState({
      chatting: e.target.value
    });
  }

  submitChat = (e) => {
    const chatting = this.state.chatting;

    if(!chatting.trim()) {
      return alert("빈값은 삽입될 수 없습니다.");
    }

    if(Meteor.user()){
      Meteor.call('chats.insert', chatting , (err) => {
        if(err) {
          console.log(err);
        } else {
          this.setState({
            chatting: '',
          });
        }
      });
    }
  }

  renderChat(){
      return this.props.chats.map((chats)=>{
          if(Meteor.userId()){
              return <Message {...chats}/>
          } else {
              console.log('로그인 필요');
          }
      })
  }

  render() {
    return (
      <div>
        <List className="chatscroll">
          {this.renderChat()}
        </List>
        <Form onSubmit={this.submitChat}>
          <Input 
            onChange={this.handleChange} 
            value={this.state.chatting} 
            name='chatting' 
            label='채팅' 
            placeholder='Tell us more about you...' />
          <Button type='submit' primary>Send</Button>
        </Form>
      </div>
    );
  }
}
