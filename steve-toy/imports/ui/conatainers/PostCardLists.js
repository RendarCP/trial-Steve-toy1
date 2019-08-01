import PostCardLists from '../components/PostCardLists';
import { withTracker } from 'meteor/react-meteor-data';

export default withTracker(()=>{
  Meteor.subscribe('post');

  return {
    posts: Posts.find({},{ $sort: {createdAt:-1}}).fetch()
  }
})(PostCardLists);
