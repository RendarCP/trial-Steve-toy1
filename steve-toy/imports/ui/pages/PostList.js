import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../../api/post.js';
import { Meteor } from 'meteor/meteor';
import { Card,Icon,Container } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Comments from '../../api/comment.js';
import { CLIENT_RENEG_WINDOW } from 'tls';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        };
    }

    componentDidMount() {
        const { _id } = this.props;
        Meteor.call('comments.counts', _id, (err, result) => {
            if(err) {
                return console.log(err);
            }
            this.setState({result});
        });
    }

    render() {
        return  <a> 
                <Icon name='comment'/>
                {this.state.result}
                </a>
    }
}

class PostList extends Component {
    
    renderPost(){
        return this.props.posts.map((post)=>{
            if(Meteor.userId()){
            return      <Card link key={post._id} className="PostList">
                            <Card.Content>
                                <Card.Header className="titleHeader"><Link to={`/post/${post._id}`}>{post.title}</Link></Card.Header>
                            <Card.Description>
                            {post.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='heart' className="iconMargin" />
                                {post.favorite.length}
                            </a>
                            <Comment _id={post._id} />
                        </Card.Content>
                    </Card>
            }
            else{
                return     <Card key={post._id} className="PostList">
                                <Card.Content>
                                    <Card.Header>{post.title}</Card.Header>
                                <Card.Description>
                                {post.description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='heart' className="iconMargin" />
                                    {post.favorite.length}
                                </a>
                                <Comment _id={post._id} />
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
    // Meteor.subscribe('comments');
        return{
            posts: Posts.find({},{ $sort: {createdAt:-1}}).fetch(),
            // comments:Comments.find().count(),
            // comment:Comments.find().fetch(),
        }
})(PostList);