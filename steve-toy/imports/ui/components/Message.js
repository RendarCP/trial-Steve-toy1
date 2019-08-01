import React from 'react';
import { Meteor } from 'meteor/meteor';
import { List, Label } from 'semantic-ui-react';

export default function Message(props) {
  const { userId, createdAt, chatcontent } = props;

  function validateUser() {
    if(userId === Meteor.userId()) {

      return (
        <>
          <Label.Detail>{moment(createdAt).format('L')}</Label.Detail>
          <Label size='large' pointing='right' color='orange'>{chatcontent}</Label>
        </>
      );
    }
    return (
      <>
        <Label size='large' pointing='left'>{chatcontent}</Label>
        <Label.Detail>{moment(createdAt).format('L')}</Label.Detail>
      </>
    );
  }

  return (
    <List.Item>
      <List.Content className="chatlist" floated='right'>
        {validateUser()}
      </List.Content>
    </List.Item>
  );
}