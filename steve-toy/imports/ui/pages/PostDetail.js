import React, { Component } from 'react';
import {Container,Header,Image,TextArea,Form,Button} from 'semantic-ui-react'
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Posts from '../../api/post.js';

class PostDetail extends Component {
    render() {
        const test = this.props
        console.log(test);
        return (
            <div className="postDetail">
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Semantic UI React Fixed Template</Header>
                <p>This is a basic fixed menu template using fixed size containers.</p>
                <p>
                A text container is used for the main container, which is useful for single column layouts.
                </p>
            </Container>
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

export default withTracker(()=>{
    const ready = Meteor.subscribe('post').ready();
    console.log(ready);
    return{
        posts:Posts.find({}).fetch()
    }
})(PostDetail);