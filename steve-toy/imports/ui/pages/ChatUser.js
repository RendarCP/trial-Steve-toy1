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
        //initialState
    }
    handleChange=(e)=>{
       this.setState({
           search : e.target.value,
       })
    }
    // handleResultSelect = (e, { result }) => this.setState({ value: result.title })
    // handleSearchChange = (e, { value }) => {
    //     this.setState({ isLoading: true, value })
    
    //     setTimeout(() => {
    //       if (this.state.value.length < 1) return this.setState(initialState)
    
    //       const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
    //       const isMatch = result => re.test(result.title)
    
    //       this.setState({
    //         isLoading: false,
    //         results: _.filter(source, isMatch),
    //       })
    //     }, 300)
    //   }
    renderUsers(){
        return this.props.users.map((users)=>{
            return users.emails.map((emails)=>{
                return <Feed key={users._id}>
                <Feed.Event>
                <Feed.Label>
                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                </Feed.Label>
                <Feed.Content>
                    <Feed.Summary>
                    <Feed.User key={users._id} onClick={e=>this.props.onChange(emails.address,users.profile.phoneNumber)}>{users.profile.userName}</Feed.User>
                    <Feed.Date>1 Hour Ago</Feed.Date>
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>
                </Feed>
            })
        })
    }
    render() {
        return (
            <div>
                <Input icon='search' placeholder='Search...' name="search" onChange={this.handleChange}/>
                {/* <Search
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true,
                    })}
                    results={results}
                    value={value}
                    {...this.props}/> */}
                 <div className="userscroll">
                    {this.renderUsers()}
                </div>
            </div>
            
        );
    }
}

export default withTracker(()=>{
    Meteor.subscribe('allUsers');
    Meteor.subscribe('userStatus');
    return{
        users:Meteor.users.find().fetch(),
    }
})(ChatUser);