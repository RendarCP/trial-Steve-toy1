import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='sample@mail.com'
                         type="email"
                         name="email"
                         onChange={this.handleChage}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Name'
                         //onChange={e=>this.handleOnPasswordInput(e.target.value)} />
                         type="password"
                         onChange={this.handleOnPasswordInput}/>
                    </Form.Field>
                    <Button basic><Link to="/">Cancel</Link></Button>
                    <Button primary type='submit'>Ok</Button>
                </Form>            
            </div>
        );
    }
}

export default Login;