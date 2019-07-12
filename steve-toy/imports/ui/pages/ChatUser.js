import React, { Component } from 'react';
import { Input,List, Image,Button,Form, TextArea,Grid } from 'semantic-ui-react'

class ChatUser extends Component {
    state={
        search:'',
    }
    handleChange=(e)=>{
       this.setState({
           search : e.target.value,
       })
    }
    render() {
        return (
            <div>
                <Input icon='search' placeholder='Search...' name="search" onChange={this.handleChange}/>
                {this.state.search}
            </div>
            
        );
    }
}

export default ChatUser;