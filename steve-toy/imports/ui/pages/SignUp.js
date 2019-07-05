import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        email:'',
        userName:'',
        password:'',
        passwordCheck:'',
        PhoneNumber:''
    }
    handleChage=(e) =>{
        this.setState({
            [e.target.name]: e.target.value,
            //passwordCheck: e.target.password.value
        });
    }
    render() {
        return (
            <div>
                <h1>회원가입 화면입니다</h1>
                <input
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChage}
                    name="email"
                    placeholder="이메일"/>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={this.handleChage}
                    name="userName"
                    placeholder="User Name"/>
                <input
                    value={this.state.password}
                    onChange={this.handleChage}
                    type="password"
                    name="password"
                    placeholder="비밀번호"/>
                <input
                    value={this.state.passwordCheck}
                    onChange={this.handleChage}
                    type="password"
                    name="passwordCheck"
                    placeholder="비밀번호 확인"/>
                <input
                    value={this.state.PhoneNumber}
                    onChange={this.handleChage}
                    type="text"
                    name="PhoneNumber"
                    placeholder="PhoneNumber"/>
                <div>이메일:{this.state.email} userName:{this.state.userName} 패스워드:{this.state.password} check:{this.state.passwordCheck} 폰:{this.state.PhoneNumber}</div>
            </div>
        );
    }
}

export default SignUp;