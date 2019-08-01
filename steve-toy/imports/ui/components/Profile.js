import React, { Component } from 'react';
import { Card,extra } from 'semantic-ui-react';

export default function Profile(props) {
  const { email, phone } = props;
  return (
    <div className='chatProfile'>
      <Card
        image='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        header={email}
        description={phone}
        extra={extra}
      />
    </div>
  );
};
