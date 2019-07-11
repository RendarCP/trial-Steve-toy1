import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/layouts/App';
import 'semantic-ui-css/semantic.min.css';
import '../imports/api/post.js';
//import '@fortawesome/fontawesome-free';

//Meteor.subscribe('post');

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
