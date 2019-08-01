import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {  Menu, Icon } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';

class Header extends Component {
  logOut = () => {
    Meteor.logout((err) => {
      if(err) {
        console.log(err);
      }
    });
  }
  render() {
    const current = this.props.currentUser;

    return (
      <div className="Nav">
        <Menu secondary inverted color='blue' size="huge">
          <Menu.Menu position='left'>
              { Meteor.userId() ? (
              <a onClick={() => FlowRouter.go('postwrite')}><Button basic inverted>Blog Write</Button></a>
              ): null}
              { Meteor.userId() ? (
              <a onClick={() => FlowRouter.go('favorite')}><Button basic inverted>Favorite</Button></a>
              ): null}
          </Menu.Menu>
          <a onClick={() => FlowRouter.go('home')} className="mainButton"><Icon name='apple' />Steve Toy Project</a>
          <Menu.Menu position='right'>
              {Meteor.userId() ? (<a onClick={() => FlowRouter.go(`/useredit/${Meteor.userId()}`)}><Button basic inverted className="loginButton">UserInfo</Button></a>
              ): null}
              { !current._id ? (
              <a onClick={() => FlowRouter.go('login')}><Button basic inverted className="loginButton">LOG IN</Button></a>):
                  (<a onClick={() => FlowRouter.go('home')}><Button basic inverted onClick={this.logOut}>Log Out</Button></a>  )
              }
              { !current._id? (
                  <a onClick={() => FlowRouter.go('signup')}><Button basic inverted className="signUpButton">SIGN UP</Button></a>
              ): null}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser:Meteor.user() || {}
  };
})(Header);
