import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>로그인 화면입니다</h1>
                <input
                 type="text"
                 placeholder="아이디"/>
                 <input
                  type="text"
                  placeholder="비밀번호"/>
            </div>
        );
    }
}

export default Login;