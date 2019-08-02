import { mount } from 'react-mounter';
import { Home, Login , Signup, PostWrite, PostDetail, Favorites } from '../../ui/pages/index';

FlowRouter.route('/',{
  name:'home',
  action: function() {
    mount(Home) 
  }
})
FlowRouter.route('/login',{
  name:'login',
  action: function() {
    mount(Login) 
  }
})
FlowRouter.route('/signup',{
  name:'signup',
  action: function() {
    mount(Signup) 
  }
})
FlowRouter.route('/useredit/:id',{
  name:'useredit',
  action: function() {
    mount(Signup) 
  }
})
FlowRouter.route('/postwrite',{
  name:'postwrite',
  action: function() {
    mount(PostWrite) 
  }
})
FlowRouter.route('/postedit/:id',{
  name:'postedit',
  action: function() {
    mount(PostWrite)
  }
})
FlowRouter.route('/post/:id',{
  name:'postdetail',
  action: function() {
    mount(PostDetail) 
  }
})
FlowRouter.route('/favorite',{
  name:'favorite',
  action: function() {
    mount(Favorites) 
  }
})
import Test from '../../ui/containers/PostCardLists'
FlowRouter.route('/test',{
  name:'test',
  action: function() {
    mount(Test) 
  }
})