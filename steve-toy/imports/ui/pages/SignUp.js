import React, { Component } from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';
class SignUp extends Component {
    state = {
        email:'',
        userName:'',
        password:'',
        passwordCheck:'',
        PhoneNumber:'',
    }
    // checkPassword(){
    //     if(!this.state.password || this.state.password != this.state.passwordCheck){
    //         console.error("비밀번호 다름");
            
    //     }
    //     else{

    //     }
    // }
    handleChage=(e) =>{
        this.setState({
            [e.target.name]: e.target.value,
            //passwordCheck: e.target.password.value
        });
    }
    // handleOnPasswordInput(passwordInput){
    //     this.setState({password:passwordInput});
    // }
    // handleOnCofirmPasswordInput(confirmPasswordInput){
    //     this.setState({passwordCheck:confirmPasswordInput});
    // }
    handleOnPasswordInput=(e)=>{
        this.setState({password:e.target.value});
    }
    handleOnCofirmPasswordInput=(e)=>{
        this.setState({passwordCheck:e.target.value});
    }
    passwordMatch(){
        const { password,passwordCheck} = this.state;
        return password===passwordCheck;
    }
    renderFeedbackMessage(){
       //const{passwordCheck} =this.state;
        //if(passwordCheck){
            if(!this.passwordMatch()){
                return(
                    <div>패스워드가 일치하지 않습니다</div>
                )
            }
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        const userName = this.state.userName;
        const phoneNumber = this.state.PhoneNumber;
        Accounts.createUser({
            email,
            password,
            profile:{
                userName,
                phoneNumber,
            }

        }, (err)=>{
            if(err){
                this.setState({
                    error:{none:err.reason},
                });
            }
            else{
                this.props.history.push('/login');
            }
        });
    }
    render() {
        return (
            <div>
                <h1>회원가입 화면입니다</h1>
                  <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='sample@mail.com'
                         type="email"
                         name="email"
                         onChange={this.handleChage}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Name' 
                         name="userName"
                         onChange={this.handleChage}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password'
                         //onChange={e=>this.handleOnPasswordInput(e.target.value)} />
                         type="password"
                         onChange={this.handleOnPasswordInput}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password Confirm</label>
                        <input placeholder='Password Confirm'
                            type="password"
                         //onChange={e=>this.handleOnCofirmPasswordInput(e.target.value)} />
                         onChange={this.handleOnCofirmPasswordInput}/>
                         {this.renderFeedbackMessage()}
                    </Form.Field>
                    <Form.Field>
                        <label>Phone Number</label>
                        <input placeholder='Phone'
                         name="PhoneNumber" 
                         onChange={this.handleChage}/>
                    </Form.Field>
                    <Button basic><Link to="/">Cancel</Link></Button>
                    <Button primary type='submit'>Ok</Button>
                </Form>
            </div>
        );
    }
}

export default SignUp;