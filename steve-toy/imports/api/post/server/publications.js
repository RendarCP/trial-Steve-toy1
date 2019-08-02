import { Meteor } from 'meteor/meteor';
import Posts from '../post';

Meteor.publish('post', function() {
  return Posts.find();
});

Meteor.publish('posts.favorites', function() {
  const selector = {
    favorite: {
      $in: [this.userId]
    }
  }
  favorites = Posts.find(selector);
  
  return favorites;
});
