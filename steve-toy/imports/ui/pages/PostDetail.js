import React, { Component } from 'react';
import {Container,Header,TextArea,Form,Button,Icon,Card} from 'semantic-ui-react'
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Posts from '../../api/post.js';
import PostList from '../pages/PostList.js';
import {Link} from 'react-router-dom';
import { Match } from 'meteor/check';
import Comments from '../../api/comment.js';
import 'moment';

class PostDetail extends Component {
    state={
        favoriteLike:false,
        heartname:false,
        comment:'',
    }
    handleChange=(e)=>{
        this.setState({
            comment : e.target.value,
        })
    }
    handleLike=(e)=>{
        this.setState(prevState=>({
            heartname : !prevState.heartname
        }));
        console.log(this.state.heartname);
        return this.props.posts.map((posts)=>{
            if(posts.favorite.length == 0){
                this.setState({
                    heartname:true
                })
                Meteor.call('post.favorite',this.props.match.params.id,Meteor.user()._id,(err)=>{
                    if(err){
                        this.setState({
                            error:{none:err.reason},
                        })
                    }
                    else{
                        console.log("좋아요 완료!!");
                    }
                })
            }
            else{
            return posts.favorite.map((favorites)=>{
                if(favorites == Meteor.user()._id){
                    this.setState({
                        heartname:false,
                    })
                    Meteor.call('post.favoirte.remove',this.props.match.params.id,Meteor.user()._id,(err)=>{
                        if(err){
                            this.setState({
                                error:{none:err.reason},
                            })
                        }
                        else{
                            this.setState({
                                heartname:false,
                            })
                            console.log('좋아요 취소완료');
                        }
                    })
                }
                else{
                    Meteor.call('post.favorite',this.props.match.params.id,Meteor.user()._id,(err)=>{
                        if(err){
                            this.setState({
                                error:{none:err.reason},
                            })
                        }
                        else{
                            this.setState({
                                heartname:true,
                            })
                            console.log('좋아요 완료!');
                        }
                    })
                }
            })
          }
        })
    }
    PostEdit(){
        return this.props.posts.map((posts)=>{
            if(posts.owner == Meteor.user()._id){
                return <Link to={`/postupdate/${posts._id}`} key={posts._id}><Button primary>Post Edit</Button></Link>
            }
        })

    }
    SubmitComment=(e)=>{
        e.preventDefault();
        const Comment = this.state.comment;
        if(Comment==''){
                alert('댓글을 입력하셔야됩니다');
        }
        else{
            Meteor.call('comments.insert',this.props.match.params.id,Comment,(err)=>{
                if(err){
                    this.setState({
                        error:{none:err.reason},
                    })
                }
                else{
                    this.setState({
                        comment:''
                    })
                    console.log('댓글 등록완료');
                }
            })
        }
    }
    renderCommentDetail(){
        return this.props.comments.map((comments)=>{
            if(comments.postId == this.props.match.params.id){
           return <Card fluid color='red' key={comments._id}>
                <Card.Header>{comments.username}</Card.Header>
                <Card.Meta><p>{moment(comments.createdAt).fromNow()}</p></Card.Meta>
                <Card.Content>{comments.comments}</Card.Content>
          </Card>
            }
        })
    }
    renderPostDetail(){      
        if(Meteor.userId()){
        return this.props.posts.map((posts)=>{
            return <Container key={posts._id} text style={{ marginTop: '7em' }}>
                <Button onClick={this.handleLike}><Icon color='red' name={this.state.heartname ? 'heart' : 'heart outline'} className="heart" size='big'/></Button>
            <Header className="Posts" as='h1'>{posts.title}</Header>
            <p className="Posts">{posts.description}</p>
            <p>
            {posts.content}
            </p>
            {this.PostEdit()}
        </Container>
            })
        }
        else{
        this.props.history.push('/');
        alert("로그인이 필요합니다");
        }
    }
    componentDidMount(){
        return this.props.posts.map((posts)=>{
            return posts.favorite.map((favorites)=>{
                if(favorites == Meteor.user()._id){
                    this.setState({
                        heartname:true,
                    })
                }
            })
        })
    }
    render() {
        return (
            <div className="postDetail">
                {this.renderPostDetail()}
            <Container text style={{ marginTop: '7em' }}>
                <Form onSubmit={this.SubmitComment}>
                    <Form.Field control={TextArea} name='comment' onChange={this.handleChange} label='Comment' placeholder='Tell us more about you...' />
                    <Button primary type='submit'>ADD COMMENT</Button>
                </Form>
                <div>{this.state.comment}</div>
                {this.renderCommentDetail()}
            </Container>
            </div>
        );
    }
}

export default withTracker((props)=>{
    Meteor.subscribe('post');
    Meteor.subscribe('comments');
    // console.log(ready);
    const postId = props.match.params.id
    return{
        posts:Posts.find({_id:postId}).fetch(),
        comments:Comments.find().fetch(),
    }
})(PostDetail);