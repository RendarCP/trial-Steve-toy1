import { withTracker } from 'meteor/react-meteor-data';
import UserLists from '../components/UserLists';

export default withTracker(() => {
  const usersSub = Meteor.subscribe('allUsers');
  
  return {
    isReady: usersSub.ready(),
    users: Meteor.users.find().fetch(),
  };
})(UserLists);
