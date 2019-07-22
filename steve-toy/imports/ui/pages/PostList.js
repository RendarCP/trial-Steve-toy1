import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../../api/post.js';
import { Meteor } from 'meteor/meteor';
import { Input,Grid,Image, Segment,Button,Container,Header,Card,Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Comments from '../../api/comment.js';

class PostList extends Component {
    countComments(){
        return this.props.posts.map((posts)=>{
            return this.props.comment.map((comments)=>{
                if(posts._id == comments.postId){
                    return <a key={comments._id}> 
                             <Icon name='comment'/>
                                {this.props.comments}
                            </a>
                }
            })
        })
    }
    renderPost(){
        return this.props.posts.map((posts)=>{
            if(Meteor.userId()){
            return     <Card link key={posts._id} className="PostList">
                            <Card.Content>
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
                                33
                            </a>
                            {/* {this.countComments()} */}
                        </Card.Content>
                    </Card>
            }
            else{
                return     <Card key={posts._id} className="PostList">
                                <Card.Content>
                                    <Card.Header>{posts.title}</Card.Header>
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
                                    33
                                </a>
                            </Card.Content>
                        </Card>
            }
        })
    }
    
    render() {
        return (
                <Card.Group itemsPerRow={5}>
                    {this.renderPost()}
                </Card.Group>

        );
    }
}

export default withTracker(()=>{
    Meteor.subscribe('post');
    Meteor.subscribe('comments');
        return{
            posts: Posts.find({},{ $sort: {createdAt:-1}}).fetch(),
            comments:Comments.find().count(),
            comment:Comments.find().fetch(),
        }
})(PostList);