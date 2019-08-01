import UserLists from '../components/UserLists';
import { withTracker } from 'meteor/react-meteor-data';

export default withTracker(()=>{
  const usersSub = Meteor.subscribe('allUsers');

  return {
    isReady: usersSub.ready(),
    users: Meteor.users.find().fetch(),
  };
})(UserLists);
