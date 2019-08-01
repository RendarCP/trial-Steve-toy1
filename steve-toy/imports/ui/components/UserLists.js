import React from 'react';
import UserList from './UserList';
import { Input } from 'semantic-ui-react';

export default class UserLists extends React.Component {
  state = { search: "" };

  handleChange = ev => {
    this.setState({ search: ev.target.value });
  }

  renderSearchUser = () => {
    const { users, selectUser, isReady } = this.props;

    const searched = users.filter(user => {
      return user.profile.userName.indexOf(this.state.search) > -1;
    });

    if(!isReady) {
      return null;
    }

    return searched.map(user => <UserList key={user._id} {...user}  selectUser={selectUser} />)
  }


  render() {
    return (
      <div>
        <Input icon='search' placeholder='Search...' name="search" onChange={this.handleChange} value={this.state.search}/>
        <div className="userscroll">
          {this.renderSearchUser()}
        </div>
      </div>
    );
  }
}