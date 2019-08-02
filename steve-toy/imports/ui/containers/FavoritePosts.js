import PostCardLists from '../components/PostCardLists';
import Posts from '../../api/post/post';

export default withTracker(()=>{
  Meteor.subscribe('posts.favorites');

  return {
    posts: Posts.find({}, { $sort: { createdAt: -1 } }).fetch()
  };
})(PostCardLists);
