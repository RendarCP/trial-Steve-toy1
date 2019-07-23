import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import 'moment';

export default Comments = new Mongo.Collection('comments');

if(Meteor.isServer){
    Meteor.publish('comments', function(){
        return Comments.find();
    })
}

Meteor.methods({
    'comments.insert' (postId,comments){
        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }
        Comments.insert({
            postId,
            comments,
            createdAt: new Date(),
             //createdAt: moment().format('llll'),
            owner: this.userId,
            username:Meteor.users.findOne(this.userId).profile.userName,
        })
    },
    'comments.counts' (postId){
        return Comments.find({postId}).count()
    }
})