import React, { Component } from 'react';
import { Input,Feed,Icon,Search } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Users from '../../api/usersList';

class ChatUser extends Component {
    state={
        search:'',
        email:'',
        phoneNumber:'',
    }
    test=(e)=>{
     this.props.users.map((users)=>{
            this.setState({
                search:users.profile.userName,
            })
        })
    }
    handleChange=(e)=>{
       this.setState({
           search : e.target.value,
       })
    }
    render() {
        const mapToComponents = (data) =>{
            data.sort();
            data = data.filter((users)=>{
                return users.profile.userName.indexOf(this.state.search) > -1;
            });
            return data.map((users)=>{
                return users.emails.map((emails)=>{
                if(!users.status) {
                    return null;
                }
                    return <Feed key={users._id}>
                                <Feed.Event>
                                    <Feed.Label>
                                        <img src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                                    </Feed.Label>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            <Feed.User key={users._id} onClick={e=>this.props.onChange(emails.address,users.profile.phoneNumber)}>{users.profile.userName}</Feed.User>
                                            <Feed.Date>{users.status.online ? 'online' : 'offline'}</Feed.Date>
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                })
            })
        }
        return (
            <div>
                <Input icon='search' placeholder='Search...' name="search" onChange={this.handleChange} value={this.state.search}/>
                 <div className="userscroll">
                    {mapToComponents(this.props.users)}
                </div>
            </div>
            
        );
    }
}

export default withTracker(()=>{
    Meteor.subscribe('allUsers');
    return{
        users:Meteor.users.find().fetch(),
    }
})(ChatUser);