import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../../api/post.js';
import { Meteor } from 'meteor/meteor';
import { Input,Grid,Image, Segment,Button,Container,Header,Card,Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class PostList extends Component {
    renderPost(){
        //console.log(idtest);
        return this.props.posts.map((posts)=>{
            if(Meteor.userId()){
            //     return <Grid.Column key={posts._id} className="PostList">
            //     <Link to={`/post/${posts._id}`}><Container text style={{ marginTop: '2em' }}>
            //         <Header as='h1'>{posts.title}</Header>
            //             <p>{posts.description}</p>
            //     </Container></Link>
            // </Grid.Column>  
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
                    123
                </a>
                <a> 
                    <Icon name='comment'/>
                    333
                </a>
            </Card.Content>
          </Card>

            }
            else{
                return     <Card link key={posts._id} className="PostList">
                <Card.Content>
                    <Card.Header>{posts.title}</Card.Header>
                <Card.Description>
                {posts.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='heart' className="iconMargin" />
                    123
                </a>
                <a> 
                    <Icon name='comment'/>
                    333
                </a>
            </Card.Content>
          </Card>
            }
        })
    }
    
    render() {
        return (
                // <Grid stackable columns={5} className="Post">
                //     {this.renderPost()}
                // </Grid> 
                  <Card.Group itemsPerRow={5}>
                    {this.renderPost()}
                </Card.Group>

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