import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../../api/post.js';
import {Link} from 'react-router-dom';
import { Input,Grid,Card,Icon } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';

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
class FavoritePost extends Component {
    renderFavorite(){
        return this.props.posts.map((posts)=>{
            return posts.favorite.map((favorites)=>{
                if(favorites == Meteor.user()._id){
                    return     <Card link key={favorites} className="PostList">
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
                                    <Comment _id={posts._id} />
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
    const test = Meteor.subscribe('posts.favorites');
    return{
        posts:Posts.find({},{ $sort: {createdAt:-1}}).fetch()
    }
})(FavoritePost);