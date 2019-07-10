import React, { Component } from 'react';
import ChatForm from './ChatForm';
import PostList from './PostList';

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