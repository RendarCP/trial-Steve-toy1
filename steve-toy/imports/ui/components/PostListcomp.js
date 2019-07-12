import React, { Component } from 'react';
import { Input,Grid,Image, Segment,Container,Header } from 'semantic-ui-react';
import postList from '../pages/PostList.js/index.js.js';
import { withTracker } from 'meteor/react-meteor-data';
import {Post} from '../../api/post.js';
import { Meteor } from 'meteor/meteor';

class PostList extends Component {
    render() {
        return (
            <div className="Post">
                Post가 들어갈 영역
                <Grid stackable columns={5}>
                    <Grid.Column>
                    <Segment>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Segment>
                    </Grid.Column>
                    <Grid.Column>
                    <Segment>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Segment>
                    </Grid.Column>
                    <Grid.Column>
                    <Segment>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Segment>
                    </Grid.Column>
                    <Grid.Column>
                    <Segment>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Segment>
                    </Grid.Column>
                    <Grid.Column>
                    <Segment>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default PostList