import React from 'react';
import { Feed } from 'semantic-ui-react';

export default function UserList(props) {
  const{ status, emails, profile, selectUser } = props;

  handleClick=()=> {
      selectUser(emails[0].address, profile.phoneNumber)
  }
  return (
    <Feed>
        <Feed.Event>
            <Feed.Label>
                <img src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                    <Feed.User onClick={this.handleClick}>{profile.userName}</Feed.User>
                    <Feed.Date>{status.online ? 'online' : 'offline'}</Feed.Date>
                </Feed.Summary>
            </Feed.Content>
        </Feed.Event>
    </Feed>
  );
}

// this.props.onChange(emails[0].address,profile.phoneNumber)