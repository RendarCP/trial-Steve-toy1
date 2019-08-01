import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../../ui/layouts/mainlayout'

import { Login , Signup, Postwrite, Postdetail, Favoriteposts } from '../../ui/pages/index';
import Profile from '../../ui/components/Profile';

function Ha() {
  return <div>ha</div>
};


FlowRouter.route('/',{
  name:'home',
  action: function() {
    mount(MainLayout, {ContentOne: }) 
  }
})
FlowRouter.route('/login',{
  name:'login',
  action: function() {
    mount(Profile, {email: "test@test.com", phone: "030030030"}) 
  }
})
FlowRouter.route('/signup',{
  name:'signup',
  action: function() {
    mount(Profile, {email: "test@test.com", phone: "030030030"}) 
  }
})
FlowRouter.route('/useredit/:id',{
  name:'useredit',
  action: function() {
    mount(Profile, {email: "test@test.com", phone: "030030030"}) 
  }
})
FlowRouter.route('/postwrite',{
  name:'postwrite',
  action: function() {
    mount(Profile, {email: "test@test.com", phone: "030030030"}) 
  }
})
FlowRouter.route('/postedit/:id',{
  name:'postedit',
  action: function() {
    mount(Profile, {email: "test@test.com", phone: "030030030"}) 
  }
})
FlowRouter.route('/post/:id',{
  name:'postdetail',
  action: function() {
    mount(Profile, {email: "test@test.com", phone: "030030030"}) 
  }
})
FlowRouter.route('/favorite',{
  name:'favorite',
  action: function() {
    mount(Profile, {email: "test@test.com", phone: "030030030"}) 
  }
})