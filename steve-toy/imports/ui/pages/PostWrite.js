import React, { Component } from 'react';
import { Button, Form, Icon,TextArea } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
// import { Posts } from '../../api/post.js';
import Posts from '../../api/post.js';
import {withTracker} from 'meteor/react-meteor-data';

import MainLayout from '../layouts/mainlayout';

class PostWrite extends Component {
  state = {
    title:'',
    description:'',
    content:'',
    alert:''
  };

  handleChage = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, content } = this.state;

    if(FlowRouter.getRouteName() === 'postwrite'){
      if(title === '' || description === '' || content === '') {
          this.setState({
              alert:'3가지 모두 필수 입력입니다!',
          });
      } else {
        Meteor.call('post.insert', title, description, content,(err) => {
          if(err){
            console.log(err);
          } else {
            FlowRouter.go('home');
          }
        });
      }
    } else {
      if(title === '' || description === '' || content ==='') {
        this.setState({
          alert: '3가지 모두 필수 입력입니다!',
        });
      } else {
        Meteor.call('post.update', FlowRouter.getParam('id'), title, description, content, (err) => {
          if(err){
            console.log(err);
          } else {
            FlowRouter.go('home');
            alert('업데이트 성공');
          }
        });
      }
    }
  }

  componentDidMount(){
    if(Meteor.user()){
      const { title, description, content } = this.props.posts || {};

      this.setState({ title, description, content });
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input 
            placeholder='Title Only'
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChage}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input 
            placeholder='Name' 
            name="description"
            value={this.state.description}
            onChange={this.handleChage}
          />
        </Form.Field>
        <Form.Field 
          control={TextArea} 
          label='Content' 
          placeholder='Tell us more about you...' 
          name='content'
          value={this.state.content}
          onChange={this.handleChage}
        />
        <a onClick={() => FlowRouter.go('home')}><Button basic>Cancel</Button></a>
        <Button primary type='submit'>Save</Button>
        <div className="modal">{this.state.alert}</div>
      </Form>
    );
  }
}

export default MainLayout(withTracker((props)=>{
  Meteor.subscribe('post').ready();
  const _id = FlowRouter.getParam('id');

  return {
      posts:Posts.find({ _id }).fetch()[0]
  }
})(PostWrite));
