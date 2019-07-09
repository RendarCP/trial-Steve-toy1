import React, { Component } from 'react';
import { Input,Grid,Image, Segment } from 'semantic-ui-react'

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

export default PostList;