import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../../api/post.js';
import {Link} from 'react-router-dom';
import { Input,Grid,Image, Segment,Button,Container,Header } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';


class FavoritePost extends Component {
    renderFavorite(){
        return this.props.posts.map((posts)=>{
            return posts.favorite.map((favorites)=>{
                if(favorites == Meteor.user()._id){
                    return <Grid.Column key={posts._id} className="PostList">
                    <Link to={`/post/${posts._id}`}><Container text style={{ marginTop: '2em' }}>
                        <Header as='h1'>{posts.title}</Header>
                            <p>{posts.description}</p>
                    </Container></Link>
                </Grid.Column> 
                }
            })
        })
    }
    render() {
        return (
            <div><h1>Favorite</h1>
            <Grid stackable columns={5} className="Post">
                {this.renderFavorite()} 
            </Grid> 
            </div>
        );
    }
}

export default withTracker(()=>{
    const test = Meteor.subscribe('post');
    return{
        posts:Posts.find().fetch()
    }
})(FavoritePost);