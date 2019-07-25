import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Input, Menu } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import { METHODS } from 'http';
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
                            <Link to="/postWrite"><Button basic inverted>Blog Write</Button></Link>
                            ): null}
                        {/* <Link to="/postWrite"><Button>Blog Write</Button></Link> */}
                            { Meteor.userId() ? (
                            <Link to="/favorite"><Button basic inverted>Favorite</Button></Link>
                            ): null}
                        </Menu.Menu>
                            <Link to="/" className="mainButton">Steve Toy Project</Link>
                            <Menu.Menu position='right'>
                            {Meteor.userId() ? (<Link to={`/userinfo/${Meteor.userId()}`}><Button basic inverted className="loginButton">UserInfo</Button></Link>
                            ): null}
                            { !current._id ? (
                            <Link to="/login"><Button basic inverted className="loginButton">LOG IN</Button></Link>):
                                (<Link><Button basic inverted onClick={this.logOut}>Log Out</Button></Link>  )
                            }
                            { !current._id? (
                                <Link to="/signup"><Button basic inverted className="signUpButton">SIGN UP</Button></Link>
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