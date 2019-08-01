import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import 'moment';

export default Posts = new Mongo.Collection('post');
//export const Comments = new Mongo.Collection('comments');

if(Meteor.isServer) {
    Meteor.publish('post',function(){
        return Posts.find();
    })
    Meteor.publish('posts.favorites',function(){
        const selector = {
            favorite: {
                $in: [this.userId]
            }
        }
        favorites = Posts.find(selector);
        return favorites;
    })
    
}

Meteor.methods({
    'post.insert' (title,description,content){
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
    'post.update' (postId,title,description,content){
        const posts  = Posts.findOne(postId);
        if(posts.owner !== this.userId){
            throw new Meteor.Error('non-Authorized');
        }
        Posts.update(postId,{$set:{title: title, description:description,content:content}})
    },
    'post.favorite' (postId, favorite){
        const posts = Posts.findOne(postId);
        Posts.update(postId,{ $addToSet : {favorite}})
    },
    'post.favorite.remove' (postId, favorite){
        Posts.update(postId,{ $pull : {favorite}})
    },
})
