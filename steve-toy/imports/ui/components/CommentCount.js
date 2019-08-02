import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class CommentCount extends Component {
    state = observable({
      result: 0
    });

  componentDidMount() {
    const { _id } = this.props;
    Meteor.call('comments.counts', _id, (err, result) => {
      if(err) {
        return console.log(err);
      }
      this.state.result = result;
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

export default observer(CommentCount);
