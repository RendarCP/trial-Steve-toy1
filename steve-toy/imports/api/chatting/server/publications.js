import { Meteor } from 'meteor/meteor';
import Chatting from '../chatting';

Meteor.publish('chats', function(){
  return Chatting.find();
});
