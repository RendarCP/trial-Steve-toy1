import React, { Component } from 'react';
import {Container,Header,Image,TextArea,Form,Button,Icon} from 'semantic-ui-react'
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Posts from '../../api/post.js';
import PostList from '../pages/PostList.js';
import {Link} from 'react-router-dom';
import { Match } from 'meteor/check';
import post from '../../api/post.js';

class PostDetail extends Component {
    state={
        favoriteLike:false,
        heartname:false,
    }
    handleLike=(e)=>{
        this.setState(prevState=>({
            heartname : !prevState.heartname
        }));
        console.log(this.state.heartname);
        // return this.props.posts.map((posts)=>{
        //     return posts.favorite.map((maps)=>{
        //         console.log(maps);
        //     })
        // })
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
                        alert("좋아요 완료!!");
                    }
                })
            }
            else{
            return posts.favorite.map((favorites)=>{
                if(favorites == Meteor.user()._id){
                    this.setState({
                        heartname:true
                    })
                    alert('이미 눌르셨습니다');
                }
                else{
                    if(favorites !== Meteor.user()._id){
                        Meteor.call('post.favorite',this.props.match.params.id,Meteor.user()._id,(err)=>{
                            if(err){
                                this.setState({
                                    error:{none:err.reason},
                                })
                            }
                            else{
                                alert("좋아요 완료!!");
                            }
                        })
                    }
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
    renderPostDetail(){        
        if(Meteor.userId()){
        return this.props.posts.map((posts)=>{
            return <Container key={posts._id} text style={{ marginTop: '7em' }}>
                <Button onClick={this.handleLike}><Icon name={this.state.heartname ? 'heart red' : 'heart outline red'} className="heart" size='big'/></Button>
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
        // return this.props.posts.map((favorietes)=>{
        //     return favorietes.favorite.map((maps)=>{
        //         console.log(maps);
        //     })
        // })
    }
    render() {
        // console.log(this.props.match.params);
        // const idtest = this.props.match.params.id;
        // console.log(idtest);
        return (
            <div className="postDetail">
                {this.renderPostDetail()}
            <Container text style={{ marginTop: '7em' }}>
                <Form>
                    <Form.Field control={TextArea} label='Comment' placeholder='Tell us more about you...' />
                </Form>
                <Button primary>Primary</Button>
                <Container className="Comment">
                    <p style={{ fontSize: '1.33em' }}>
                        <Image avatar src='/images/avatar/large/nan.jpg' />
                            <b>Nan</b> Chief Fun Officer Acme Toys
                    </p>
                    <p>
                        A text container is used for the main container, which is useful for single column layouts.
                    </p>
                </Container>
            </Container>
            </div>
        );
    }
}

export default withTracker((props)=>{
    const ready = Meteor.subscribe('post').ready();
    //console.log(ready);
    const postId = props.match.params.id
    return{
        posts:Posts.find({_id:postId}).fetch(),
    }
})(PostDetail);