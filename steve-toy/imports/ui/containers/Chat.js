import Chat from '../components/Chat';
import Chatting from '../../api/chatting/chatting';

export default withTracker(() => {
  Meteor.subscribe('chats');
  
  return {
    chats: Chatting.find().fetch()
  };
})(Chat);
