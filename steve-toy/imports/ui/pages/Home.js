import React, { Component } from 'react';
import ChatForm from '../components/ChatForm';
import PostList from '../components/PostList';

class Home extends Component {
    render() {
        return (
            <div>
                <ChatForm/>
                <PostList/>
            </div>
        );
    }
}

export default Home;