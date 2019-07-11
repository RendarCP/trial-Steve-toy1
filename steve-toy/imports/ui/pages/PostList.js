import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Posts} from '../../api/post.js';
import { Meteor } from 'meteor/meteor';
import { Input,Grid,Image, Segment,Button,Container,Header } from 'semantic-ui-react'

class PostList extends Component {
    renderPost(){
        return this.props.posts.map((posts)=>{
            <Grid.Column key={this.props.post._id} post={this.props.post}>
                <Container text style={{ marginTop: '2em' }}>
                    <Header as='h1'>{this.props.posts.title}</Header>
                        <p>{this.props.posts.content}</p>
                </Container>
            </Grid.Column>            
        })
    }
    
    render() {
        return (
            <div>
            <Grid stackable columns={5}>
                <Grid.Column key={this.props.posts._id}>
                    <Container text style={{ marginTop: '2em' }}>
                        <Header as='h1'>{this.props.posts.title}</Header>
                            <p>{this.props.posts.content}</p>
                    </Container>
                </Grid.Column>  
            </Grid>
                   <Grid stackable columns={5}>
                    {this.renderPost()}
                </Grid> 
            </div>
        );
    }
}

export default withTracker(()=>{
    const posttest = Meteor.subscribe('post');
    console.log(posttest);

    if(posttest == true) {
        return{
            posts: Posts.find({},{sort: {createdAt:-1}}).fetch()
        };    
    } else {
        return{
            posts: []
        }
    }
})(PostList);
//export default PostList;