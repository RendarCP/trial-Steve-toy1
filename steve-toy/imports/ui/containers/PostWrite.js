import PostWrite from '../components/PostWrite';
import Posts from '../../api/post/post';

export default withTracker(() => {
  Meteor.subscribe('post').ready();
  const _id = FlowRouter.getParam('id');

  return {
    posts: Posts.find({ _id }).fetch()[0]
  };
})(PostWrite);
