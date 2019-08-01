import React from 'react';
import CardView from './CardView';
import { Container, Card } from 'semantic-ui-react';

export default function PostCardLists(props) {
  const { posts } = props;
  
  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        {posts.map(post => <CardView key={post._id} {...post} isLoggedIn={Meteor.userId()} />)}
      </Card.Group>
    </Container>
  );
}