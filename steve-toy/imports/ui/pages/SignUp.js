import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
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
    checkPassword(){
        if(!this.state.password || this.state.password != this.state.passwordCheck){
            console.error("비밀번호 다름");
            
        }
        else{

        }
    }
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
        Accounts.createUser({
            email,
            password,
            userName,
        }, (err)=>{
            if(err){
                this.setState({
                    error:{none:err.reason},
                });
            }
            this.props.history.push('/login');
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
                        <input placeholder='Name'
                         //onChange={e=>this.handleOnPasswordInput(e.target.value)} />
                         type="password"
                         onChange={this.handleOnPasswordInput}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password Confirm</label>
                        <input placeholder='Name'
                            type="password"
                         //onChange={e=>this.handleOnCofirmPasswordInput(e.target.value)} />
                         onChange={this.handleOnCofirmPasswordInput}/>
                         {this.renderFeedbackMessage()}
                    </Form.Field>
                    <Form.Field>
                        <label>Phone Number</label>
                        <input placeholder='Name'
                         name="PhoneNumber" 
                         onChange={this.handleChage}/>
                    </Form.Field>
                    <Button basic><Link to="/">Cancel</Link></Button>
                    <Button primary type='submit'>Ok</Button>
                </Form>
                <div>이메일:{this.state.email} userName:{this.state.userName} 패스워드:{this.state.password} check:{this.state.passwordCheck} 폰:{this.state.PhoneNumber}</div>
            </div>
        );
    }
}

export default SignUp;