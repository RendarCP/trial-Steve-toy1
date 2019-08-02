import { withTracker } from 'meteor/react-meteor-data';

import SignUp from '../components/SignUp';

export default withTracker(() => {
  return {
    userinfo: Meteor.user()
  };
})(SignUp);
