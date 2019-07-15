import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../../api/post.js';
import { Meteor } from 'meteor/meteor';
import { Input,Grid,Image, Segment,Button,Container,Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class PostList extends Component {
    renderPost(){
        //console.log(idtest);
        return this.props.posts.map((posts)=>{
            if(Meteor.userId()){
                return <Grid.Column key={posts._id} className="PostList">
                <Link to={`/post/${posts._id}`}><Container text style={{ marginTop: '2em' }}>
                    <Header as='h1'>{posts.title}</Header>
                        <p>{posts.description}</p>
                </Container></Link>
            </Grid.Column>  
            }
            else{
                return <Grid.Column key={posts._id} className="PostList">
                <Container text style={{ marginTop: '2em' }}>
                    <Header as='h1'>{posts.title}</Header>
                        <p>{posts.description}</p>
                </Container>
            </Grid.Column>  
            }
        //     return <Grid.Column key={posts._id} className="PostList">
        //     <Link to={`/post/${posts._id}`}><Container text style={{ marginTop: '2em' }}>
        //         <Header as='h1'>{posts.title}</Header>
        //             <p>{posts.description}</p>
        //     </Container></Link>
        // </Grid.Column>  
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