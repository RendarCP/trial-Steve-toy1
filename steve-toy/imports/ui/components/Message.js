import React from 'react';
import { List,Label } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';

export default function Mesaage(props) {
  const { createdAt, chatcontent, userId} = props;

  function validateUser() {
    if(userId === Meteor.userId()){
      return(
        <List.Content className="chatlist" floated='right'>
          <Label.Detail>{moment(createdAt).format('L')}</Label.Detail>
          <Label size='large' pointing='right' color='orange'>{chatcontent}</Label>
        </List.Content>
      );
    }
    return(
      <List.Content className="chatlistath" floated='left'>
        <Label size='large' pointing='left'>{chatcontent}</Label>
        <Label.Detail>{moment(createdAt).format('L')}</Label.Detail>
      </List.Content>
    );
  }
  
  return(
    <List.Item>
      {validateUser()}
    </List.Item>
  );
}