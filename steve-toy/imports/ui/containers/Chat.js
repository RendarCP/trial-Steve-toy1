import { withTracker } from 'meteor/react-meteor-data';
import Chat from '../components/Chat';
import Chatting from '../../api/chatting/chatting.js';

export default withTracker(() => {
  Meteor.subscribe('chats');
  
  return {
    chats: Chatting.find().fetch()
  };
})(Chat);
