import React, { Component } from 'react';
import {Container, Header, TextArea, Form, Button, Icon } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import 'moment';

import PostComment from './PostComment';

export default class PostDetail extends Component {
  state = {
    comment:'',
  };

  handleChange = (e) => {
    this.setState({
      comment : e.target.value,
    })
  }

  handleLike = (e) => {
    const { posts } = this.props;
    const currentUserId = Meteor.userId();
    const isFavorite = posts.favorite.includes(currentUserId);

    if(isFavorite){
      Meteor.call('post.favorite.remove', posts._id, currentUserId);
    } else {
      Meteor.call('post.favorite', posts._id, currentUserId);
    }
  }

  PostEdit() {
    const { posts } = this.props;

    const isPostOwner = posts.owner === Meteor.userId(); 

    return isPostOwner ? <a onClick={() => FlowRouter.go(`/postedit/${posts._id}`)} key={posts._id}><Button primary>Post Edit</Button></a> : null;
  }

  SubmitComment = (e) => {
    const Comment = this.state.comment;
    const postsId = FlowRouter.getParam('id');
    
    if(!Comment.trim()){
      alert('댓글을 입력하셔야됩니다');
    } else {
      Meteor.call('comments.insert', postsId, Comment, (err) => {
        if(err){
          console.log(err);
        } else {
          this.setState({
            comment:''
          });
        }
      });
    }
  }

  renderPostDetail = () => {
    const { posts, isPostReady } = this.props;  
    
    if(!Meteor.userId()) {
      alert("로그인이 필요합니다");
      FlowRouter.go('home');
    }

    if(isPostReady){
      return (
        <Container key={posts._id} text style={{ marginTop: '7em' }}>
          <Icon 
            onClick={this.handleLike} 
            color='red'
            name={posts.favorite.includes(Meteor.userId()) ? 'heart' : 'heart outline'} 
            className="heart" 
            size='big'
          />
          <Header className="Posts" as='h1'>{posts.title}</Header>
          <p className="Posts">{posts.description}</p>
          <p className="Postscontent">{posts.content}</p>
          {this.PostEdit()}
        </Container>
      );
    } else {
      return <div>loading....</div>
    }
  }
  render() {
    const { comments } = this.props;

    return (
      <div className="postDetail">
        {this.renderPostDetail()}
        <Container text style={{ marginTop: '7em' }}>
          <Form onSubmit={this.SubmitComment} onKeyPress={this.handleKey}>
            <Form.Field 
              control={TextArea} 
              value={this.state.comment} 
              name='comment' 
              onChange={this.handleChange} 
              label='Comment' 
              placeholder='Tell us more about you...' 
            />
            <Button primary type='submit'>ADD COMMENT</Button>
          </Form>
          {comments.map(comment=> <PostComment key={comment._id} {...comment}/>)}
        </Container>
      </div>
    );
  }
}
