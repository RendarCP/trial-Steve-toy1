import PostDetail from '../components/PostDetail';
import { withTracker } from 'meteor/react-meteor-data';

export default withTracker((props) => {
  const postId = props.match.params.id;
  const postSub = Meteor.subscribe('post');
  Meteor.subscribe('comments');

  return {
    isPostReady: postSub.ready(),
    posts: Posts.find({_id: postId}).fetch()[0],
    comments: Comments.find({}, { sort: { createdAt: -1 } }).fetch().filter(comment => comment.postId === postId),
  }
})(PostDetail);
