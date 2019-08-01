import Chat from '../components/Chat';
import { withTracker } from 'meteor/react-meteor-data';
import Chatting from '../../api/chatting.js';

export default withTracker(()=>{
  Meteor.subscribe('chats');
  
  return {
    chats: Chatting.find().fetch()
  };
})(Chat);
