import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';

import CommentCount from './CommentCount';

export default function CardView(props) {
  const { isLoggedIn, _id, title, description, favorite } = props;

  return (
    <Card link key={_id} className="PostList">
      <Card.Content>
        <Card.Header className="titleHeader">
          {isLoggedIn ? <Link to={`/post/${_id}`}>{title}</Link> : `${title}` }
        </Card.Header>
        <Card.Description>
        {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='heart' className="iconMargin" />
          {favorite.length}
        </a>
        <CommentCount _id={_id} />
      </Card.Content>
    </Card>
  );
}
