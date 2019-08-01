import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {  Menu, Icon } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
class Header extends Component {
    state={
        isLoggedIn:false,
    }
    logOut=()=>{
        //e.preventDefault();
        this.setState({
            isLoggedIn:true
        })
        Meteor.logout((err)=>{
            if(err){
                this.setState({
                    error:{none:err.reason}
                });
            }
            else{
                this.setState({
                    isLoggedIn:true,
                })
                // window.location.reload();
            }
        });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const current = this.props.currentUser;
        return (
                <div className="Nav">
                    <Menu secondary inverted color='blue' size="huge">
                        <Menu.Menu position='left'>
                            { Meteor.userId() ? (
                            <a><Button basic inverted>Blog Write</Button></a>
                            ): null}
                        {/* <a to="/postWrite"><Button>Blog Write</Button></a> */}
                            { Meteor.userId() ? (
                            <a to="/favorite"><Button basic inverted>Favorite</Button></a>
                            ): null}
                        </Menu.Menu>
                            <a to="/" className="mainButton"><Icon name='apple' />Steve Toy Project</a>
                            <Menu.Menu position='right'>
                            {Meteor.userId() ? (<a to={`/userinfo/${Meteor.userId()}`}><Button basic inverted className="loginButton">UserInfo</Button></a>
                            ): null}
                            { !current._id ? (
                            <a to="/login"><Button basic inverted className="loginButton">LOG IN</Button></a>):
                                (<a to="/"><Button basic inverted onClick={this.logOut}>Log Out</Button></a>  )
                            }
                            { !current._id? (
                                <a to="/signup"><Button basic inverted className="signUpButton">SIGN UP</Button></a>
                            ): null}
                        </Menu.Menu>
                    </Menu>
                 </div>
        );
    }
}

export default withTracker(()=>{
    return {
    currentUser:Meteor.user() || {}
    }
})(Header);