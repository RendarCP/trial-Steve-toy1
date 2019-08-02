import { Meteor } from 'meteor/meteor';
import Posts from './post';

Meteor.methods({
  'post.insert' (title, description, content){
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    Posts.insert({
      title,
      description,
      content,
      createdAt: new Date(),
      owner: this.userId,
      username:Meteor.users.findOne(this.userId).profile.userName,
      favorite:[],
    });
  },
  'post.update' (postId, title, description, content) {
    const posts = Posts.findOne(postId);
    if(posts.owner !== this.userId) {
      throw new Meteor.Error('non-Authorized');
    }
    Posts.update(postId,{ $set: { title, description, content } });
  },
  'post.favorite' (postId, favorite){
    Posts.update(postId, { $addToSet : { favorite } })
  },
  'post.favorite.remove' (postId, favorite){
    Posts.update(postId, { $pull : { favorite } })
  },
});
