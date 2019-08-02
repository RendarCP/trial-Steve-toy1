import PostCardLists from '../components/PostCardLists';

export default withTracker(()=>{
  Meteor.subscribe('post');
  
  return {
    posts: Posts.find({},{ $sort: { createdAt: -1 } }).fetch()
  };
})(PostCardLists);
