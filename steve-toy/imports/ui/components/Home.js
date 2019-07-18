import React, { Component } from 'react';
import ChatForm from './ChatForm';
import List from '../pages/PostList';
import PostDetail from '../pages/PostDetail.js';
import { Meteor } from 'meteor/meteor';

class Home extends Component {
    render() {
        return (
            <div>
                <ChatForm/>
                <List/>
                {/* <PostDetail/> */}
                
            </div>
        );
    }
}

export default Home;