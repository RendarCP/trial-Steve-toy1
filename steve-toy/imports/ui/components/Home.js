import React, { Component } from 'react';
import ChatForm from './ChatForm';
import PostList from './PostListcomp';
import List from '../pages/PostList';

class Home extends Component {
    render() {
        return (
            <div>
                <ChatForm/>
                <PostList/>
                <List/>
            </div>
        );
    }
}

export default Home;