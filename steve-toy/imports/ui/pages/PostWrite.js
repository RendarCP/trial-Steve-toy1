import React, { Component } from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../../api/post.js';

class PostWrite extends Component {
    state={
        title:'',
        description:'',
        content:''
    }
    handleChage=(e) =>{
        this.setState({
            [e.target.name]: e.target.value,
            //passwordCheck: e.target.password.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const Title = this.state.title;
        const Description = this.state.description;
        const Content = this.state.content;
        Meteor.call('post.insert',Title,Description,Content,(err)=>{
            if(err){
                this.setState({
                    error:{none:err.reason},
                })
            }
            else{
                this.props.history.push('/');
            }
        });
    }
    render() {
        return (
            <div>
                <h1>포스트 작성 화면입니다</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Title</label>
                        <input placeholder='Title Only'
                         type="text"
                         name="title"
                         onChange={this.handleChage}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Name' 
                         name="description"
                         onChange={this.handleChage}/>
                    </Form.Field>
                    {/* <Form.Field>
                        <label>Phone Number</label>
                        <input placeholder='Name'
                         name="PhoneNumber" 
                         onChange={this.handleChage}/>
                    </Form.Field> */}
                    {/* <Form.Field label='Description' control='textarea' name="content"/> */}
                    <Form.Field>
                        <label>Content</label>
                        <input placeholder='content' 
                         control='textarea'
                         name="content"
                         onChange={this.handleChage}/>
                    </Form.Field>
                    {/* <Button basic><Link to="/">Cancel</Link></Button> */}
                    <Link to="/"><Button basic>Cancel</Button></Link>
                    <Button primary type='submit'>Save</Button>
                    <div>{this.state.content} {this.state.description} {this.state.title}</div>
                </Form>
            </div>
        );
    }
}

export default PostWrite;