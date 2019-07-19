import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Header from '../components/Header.js';
class Login extends Component {
    state={
        email:'',
        password:'',
    }
    handleChage=(e) =>{
        this.setState({
            [e.target.name]: e.target.value,
            //passwordCheck: e.target.password.value
        });
    }
    CheckLogin(){
        if(this.err){
            return <div>아이디와 비밀번호를 확인해주세요</div>
        }
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        Meteor.loginWithPassword(email,password,(err)=>{
            if(err){
                this.setState({
                    error:{none:err.reason},
                });
                 alert("아이디와 비밀번호를 확인해주세요");
            }
            else{
                this.props.history.push('/');
                 window.location.reload();
            }
        })
    }
    render() {
        return (
            <div className="login">
                <div>
                    <h1>Log In</h1>
                </div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='sample@mail.com'
                         type="email"
                         name="email"
                         onChange={this.handleChage}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password'
                         //onChange={e=>this.handleOnPasswordInput(e.target.value)} />
                         type="password"
                         name="password"
                         onChange={this.handleChage}/>
                    </Form.Field>
                    <div className="buttonposition">
                        <Button basic><Link to="/">Cancel</Link></Button>
                        <Button primary type='submit'>Ok</Button>
                    </div>
                </Form>            
            </div>
        );
    }
}

export default Login;