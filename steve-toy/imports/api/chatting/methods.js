import { Meteor } from 'meteor/meteor'
import Chatting from './chatting';

Meteor.methods({
  'chats.insert' (chatcontent){
    if(!Meteor.user()){
      throw new Meteor.Error('not-authorized');
    }
    Chatting.insert({
      chatcontent,
      userId: this.userId,
      username: Meteor.users.findOne(this.userId).profile.userName,
      createdAt: new Date(),
    });
  }
});
