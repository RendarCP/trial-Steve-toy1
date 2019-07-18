import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export default Chatting = new Mongo.Collection('chats');

if(Meteor.isServer){
    Meteor.publish('chats', function(){
        return Chatting.find();
    })
}

Meteor.methods({
    'chats.insert' (chatcontent){
        if(!Meteor.user()){
            throw new Meteor.Error('not-authorized');
        }
        Chatting.insert({
            chatcontent,
            userId:this.userId,
            username:Meteor.users.findOne(this.userId).profile.userName,
            createdAt:new Date(),
        })
    }
})