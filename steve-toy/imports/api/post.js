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

// const setSchema =Posts.schema = new SimpleSchema({
//     title:{type:String},
//     description:{type:String},
//     content:{type:String},
//     createdAt:{type:String},
//     owner:{type:String},
//     username:{type:String}
// })

// Posts.attachSchema((setSchema));

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
            username:Meteor.users.findOne(this.userId).username,
        });
    }
})
