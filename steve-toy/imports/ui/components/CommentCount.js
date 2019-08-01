import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';


class CommentCount extends Component {
  constructor(props) {
      super(props);
      this.state = {
          result: 0
      };
  }

  componentDidMount() {
    const { _id } = this.props;
    Meteor.call('comments.counts', _id, (err, result) => {
      if(err) {
        return console.log(err);
      }
      this.setState({ result });
    });
  }

  render() {
    return ( 
      <a> 
        <Icon name='comment'/>{this.state.result}
      </a>
    );
  }
}

export default CommentCount;
