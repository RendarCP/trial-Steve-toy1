import PostDetail from '../components/PostDetail';
import Comments from '../../api/comment/comment';

export default withTracker((props)=>{
  const postsub = Meteor.subscribe('post');
  const _id = FlowRouter.getParam('id');
  Meteor.subscribe('comments');

  return {
    isPostReady : postsub.ready(),
    posts: Posts.find({ _id }).fetch()[0] || {},
    comments : Comments.find({}, { sort: { createdAt : -1 } }).fetch().filter(comment => comment.postId === _id),
  };
})(PostDetail);