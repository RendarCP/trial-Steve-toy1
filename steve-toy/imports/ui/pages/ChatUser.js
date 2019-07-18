import React, { Component } from 'react';
import { Input,Feed,Icon } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Users from '../../api/usersList';

class ChatUser extends Component {
    state={
        search:'',
    }
    handleChange=(e)=>{
       this.setState({
           search : e.target.value,
       })
    }
    renderUsers(){
        return this.props.users.map((users)=>{
            return <Feed key={users._id}>
            <Feed.Event>
            <Feed.Label>
                <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                <Feed.User>{users.profile.userName}</Feed.User>
                <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
            </Feed.Content>
            </Feed.Event>
            </Feed>
        })
    }
    render() {
        return (
            <div>
                <Input icon='search' placeholder='Search...' name="search" onChange={this.handleChange}/>
                 <div className="userscroll">
                    {this.renderUsers()}
                </div>
            </div>
            
        );
    }
}

export default withTracker(()=>{
    const ready=Meteor.subscribe('allUsers').ready();
    console.log(ready);
    return{
        users:Meteor.users.find().fetch()
    }
})(ChatUser);