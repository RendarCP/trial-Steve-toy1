import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../../api/post.js';
import { Meteor } from 'meteor/meteor';
import { Input,Grid,Image, Segment,Button,Container,Header } from 'semantic-ui-react';

class PostList extends Component {
    renderPost(){
        return this.props.posts.map((post)=>{
            return <Grid.Column key={post._id} className="PostList">
            <Container text style={{ marginTop: '2em' }}>
                <Header as='h1'>{post.title}</Header>
                    <p>{post.description}</p>
            </Container>
        </Grid.Column>  
        })
    }
    
    render() {
        return (
                <Grid stackable columns={5} className="Post">
                    {this.renderPost()}
                </Grid> 

        );
    }
}

export default withTracker(()=>{
    //const posttest = 
    Meteor.subscribe('post');
    //console.log(posttest);
        return{
            posts: Posts.find().fetch()
        }
})(PostList);