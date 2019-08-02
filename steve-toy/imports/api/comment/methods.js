import { Meteor } from 'meteor/meteor';
import Comments from './comment';

Meteor.methods({
  'comments.insert' (postId, comments) {
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    Comments.insert({
      postId,
      comments,
      createdAt: new Date(),
      owner: this.userId,
      username:Meteor.users.findOne(this.userId).profile.userName,
    });
  },
  'comments.counts' (postId) {
    return Comments.find({ postId }).count()
  }
});
