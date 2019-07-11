import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export default Posts = new Mongo.Collection('post');

if(Meteor.isServer) {
    Meteor.publish('post',function(){
        return Posts.find();
    })
}
// if(Meteor.isClient){
//     Meteor.subscribe('post',function(){
//         return Posts.find();
//     })
// }

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
            username:Meteor.users.findOne(this.userId).profile.UserName,
        });
    }
})
