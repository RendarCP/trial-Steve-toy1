import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../../api/post.js';
import {Link} from 'react-router-dom';
import { Input,Grid,Card,Icon } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';


class FavoritePost extends Component {
    renderFavorite(){
        return this.props.posts.map((posts)=>{
            return posts.favorite.map((favorites)=>{
                if(favorites == Meteor.user()._id){
                    return     <Card link key={posts._id} className="PostList">
                    <Card.Content>
                    {/* <Link to={`/post/${posts._id}`}> */}
                        <Card.Header className="titleHeader"><Link to={`/post/${posts._id}`}>{posts.title}</Link></Card.Header>
                    <Card.Description>
                    {posts.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='heart' className="iconMargin" />
                        {posts.favorite.length}
                    </a>
                    <a> 
                        <Icon name='comment'/>
                        333
                    </a>
                </Card.Content>
              </Card>
                }
            })
        })
    }
    render() {
        return (
            <div><h1>Favorite</h1>
                <Card.Group itemsPerRow={5}>
                    {this.renderFavorite()} 
                </Card.Group> 
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