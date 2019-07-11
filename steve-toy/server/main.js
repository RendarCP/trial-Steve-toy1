import { Accounts } from "meteor/accounts-base";
//import '../imports/ui/pages/SignUp.js'
import '../imports/api/post.js';

// import { Meteor } from 'meteor/meteor';
// import Links from '/imports/api/links';

// function insertLink(title, url) {
//   Links.insert({ title, url, createdAt: new Date() });
// }

// Meteor.startup(() => {
//   // If the Links collection is empty, add some data.
//   if (Links.find().count() === 0) {
//     insertLink(
//       'Do the Tutorial',
//       'https://www.meteor.com/tutorials/react/creating-an-app'
//     );

//     insertLink(
//       'Follow the Guide',
//       'http://guide.meteor.com'
//     );

//     insertLink(
//       'Read the Docs',
//       'https://docs.meteor.com'
//     );

//     insertLink(
//       'Discussions',
//       'https://forums.meteor.com'
//     );
//   }
// });
// Accounts.onCreateUser(function(options,user){
//   user.profile = {
//     UserName: options.profile.userName,
//     PhoneNumber: options.profile.phoneNumber
//   }
//   return user;
// })