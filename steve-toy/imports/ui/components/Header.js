import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Input, Menu } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor';
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
            }
        });
    }
    // renderLoginButton(){
    //     if(Meteor.userId()){
    //         <Button onClick={this.logOut}>Log Out</Button>
    //     }
    //     else{
    //         <Link to="/login"><Button className="loginButton">LOG IN</Button></Link>
    //      <Link to="/signup"><Button className="signUpButton">SIGN UP</Button></Link>
    //     }
    // }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        console.log(isLoggedIn);
        //const { activeItem } = this.state
        return (
            <div>
                <div className="Nav">
                    <Menu secondary color='teal'>
                        <Menu.Menu position='left'>
                            { Meteor.userId() ? (
                            <Link to="/postWrite"><Button>Blog Write</Button></Link>
                            ): null}
                        {/* <Link to="/postWrite"><Button>Blog Write</Button></Link> */}
                            { Meteor.userId() ? (
                            <Button>Favorite</Button>
                            ): null}
                        </Menu.Menu>
                            <Link to="/" className="mainButton">Steve Toy Project</Link>
                            <Menu.Menu position='right'>
                            { !Meteor.userId() ? (
                            <Link to="/login"><Button className="loginButton">LOG IN</Button></Link>):
                                (<Button onClick={this.logOut}>Log Out</Button>  )
                            }
                            { !Meteor.userId()?(
                                <Link to="/signup"><Button className="signUpButton">SIGN UP</Button></Link>
                            ): null}
                            {/* <Link to="/login"><Button className="loginButton">LOG IN</Button></Link>
                            <Button onClick={this.logOut}>Log Out</Button>  
                            <Link to="/signup"><Button className="signUpButton">SIGN UP</Button></Link> */}
                        </Menu.Menu>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default Header;