import { withTracker } from 'meteor/react-meteor-data';
import PostDetail from '../components/PostDetail';

export default withTracker((props)=>{
  const postsub = Meteor.subscribe('post');
  const postId = props.match.params.id
  Meteor.subscribe('comments');
  return{
    isPostReady : postsub.ready(),
    posts:Posts.find({_id:postId}).fetch()[0] || {},
    comments : Comments.find({},{ sort: { createdAt : -1 } }).fetch().filter(comment => comment.postId === postId),
  }
})(PostDetail);