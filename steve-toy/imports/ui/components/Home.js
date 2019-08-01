import React, { Component } from 'react';
import ChatForm from './ChatForm';
import PostCardLists from '../containers/PostCardLists';

class Home extends Component {
    render() {
        return (
            <div>
                <ChatForm/>
                <PostCardLists/>
            </div>
        );
    }
}

export default Home;
