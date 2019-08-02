import { withTracker } from 'meteor/react-meteor-data';
import PostWrite from '../components/PostWrite';
import Posts from '../../api/post/post.js';

export default withTracker(() => {
  Meteor.subscribe('post').ready();
  const _id = FlowRouter.getParam('id');

  return {
    posts: Posts.find({ _id }).fetch()[0]
  };
})(PostWrite);
