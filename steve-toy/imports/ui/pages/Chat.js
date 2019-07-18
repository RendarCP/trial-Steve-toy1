import React, { Component } from 'react';
import { Input,List, Image,Button,Form,Label } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import Chatting from '../../api/chatting.js';


class Chat extends Component {
    state={
        chatting:'',
    }
    handleChange=(e)=>{
        this.setState({
            chatting:e.target.value
        })
    }
    submitChat=(e)=>{
        e.preventDefault();
        const chatting = this.state.chatting;
        if(Meteor.user()){
            if(chatting==''){
                console.log('빈값은 삽입될수 없습니다');
            }
            else{
                Meteor.call('chats.insert',chatting,(err)=>{
                    if(err){
                        this.setState({
                            error:{none:err.reason},
                        })
                    }
                    else{
                        this.setState({
                            chatting:'',
                        })
                        console.log('채팅 삽입');
                    }
                })
            }
        }
    }
    renderChat(){
        return this.props.chats.map((chats)=>{
            if(Meteor.user()){
                if(chats.userId == Meteor.user()._id){
                    return  <List.Item key={chats._id}>
                    <List.Content className="chatlist" floated='right'>
                        <Label.Detail>{moment(chats.createdAt).format("MMM Do YY")}</Label.Detail>
                        <Label size='large' pointing='right' color='orange'>{chats.chatcontent}</Label>
                    </List.Content>
                    </List.Item>
                }
                else{
                    return  <List.Item key={chats._id}>
                    <List.Content className="chatlistath" floated='left'>
                        <Label size='large' pointing='left'>{chats.chatcontent}</Label>
                        <Label.Detail>{moment(chats.createdAt).format("MMM Do YY")}</Label.Detail>
                    </List.Content>
                    </List.Item>
                }
            }
            else{
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
                <Form.TextArea onChange={this.handleChange} name='chatting' label='채팅' placeholder='Tell us more about you...'></Form.TextArea>
                <Button type='submit' primary>Send</Button>
            </Form>
          </div>
        );
    }
}

export default withTracker(()=>{
   const ready = Meteor.subscribe('chats').ready();
    console.log(ready);
    return{
        chats:Chatting.find().fetch()
    }
})(Chat);