import React, { Component } from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

class PostWrite extends Component {
    render() {
        return (
            <div>
                <h1>포스트 작성 화면입니다</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Title</label>
                        <input placeholder='Title Only'
                         type="email"
                         name="email"
                         onChange={this.handleChage}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Name' 
                         name="userName"
                         onChange={this.handleChage}/>
                    </Form.Field>
                    {/* <Form.Field>
                        <label>Phone Number</label>
                        <input placeholder='Name'
                         name="PhoneNumber" 
                         onChange={this.handleChage}/>
                    </Form.Field> */}
                    <Form.Field label='Description' control='textarea' />
                    {/* <Button basic><Link to="/">Cancel</Link></Button> */}
                    <Link to="/"><Button basic>Cancel</Button></Link>
                    <Button primary type='submit'>Save</Button>
                </Form>
            </div>
        );
    }
}

export default PostWrite;