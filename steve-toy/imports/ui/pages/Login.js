import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import MainLayout from '../layouts/mainlayout';

class Login extends Component {
  state = {
    email:'',
    password:'',
  }
  handleChage = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit=(e)=>{
    e.preventDefault();
    const { email, password } = this.state;

    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        console.log(err);
        alert("아이디와 비밀번호를 확인해주세요");
      } else {
        FlowRouter.go('home');
      }
    });
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
            <input 
              placeholder='sample@mail.com'
              type="email"
              name="email"
              onChange={this.handleChage}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input 
              placeholder='Password'
              type="password"
              name="password"
              onChange={this.handleChage}
            />
          </Form.Field>
          <div className="buttonposition">
            <Button basic><a onClick={() => FlowRouter.go('home')}>Cancel</a></Button>
            <Button primary type='submit'>Ok</Button>
          </div>
        </Form>            
      </div>
    );
  }
}

export default MainLayout(Login);
