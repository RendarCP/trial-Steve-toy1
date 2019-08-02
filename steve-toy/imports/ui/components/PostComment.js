import { Card } from 'semantic-ui-react';

export default function PostComment(props) {
  const { username, createdAt, comments } = props;
  
  return(
    <Card fluid color='red'>
      <Card.Header>{username}</Card.Header>
      <Card.Meta><p className='comments'>{moment(createdAt).fromNow()}</p></Card.Meta>
      <Card.Content>{comments}</Card.Content>
    </Card>
  );
}
