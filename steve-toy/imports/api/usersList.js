import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


if(Meteor.isServer){
    Meteor.publish('allUsers', function (){
        return Meteor.users.find();
    })
}
