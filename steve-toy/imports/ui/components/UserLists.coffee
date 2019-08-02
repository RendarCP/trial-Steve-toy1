import { Input } from 'semantic-ui-react'
import UserList from '../components/UserList'

export default observer class UserLists extends Component
  constructor:(props) ->
    super props 
    @state = observable
      search: ''

  handleChange : (e) => 
    @state.search = e.target.value

  renderSearchUser : () =>
    { users, isReady, selectUser } = @props;

    searched = users.filter((user) =>
      user.profile.userName.indexOf(@state.search) > -1;
    )
    
    if not isReady 
      return null
    
    searched.map((user) => <UserList key={user._id} {...user} selectUser={selectUser}/>)
  
  render: () =>
      <div>
        <Input icon='search' placeholder='Search...' name="search" onChange={@handleChange} value={@state.search}/>
        <div className="userscroll">
          {@renderSearchUser(@props.users)}
        </div>
      </div>

