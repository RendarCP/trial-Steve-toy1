import { Button, Form } from 'semantic-ui-react'
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'

export default observer class SignUp extends Component 
  constructor:(props) ->
    super props
    @state = observable
      email: '',
      userName: '',
      password: '',
      newPassword: '',
      passwordCheck: '',
      phoneNumber: ''

  handleChage: (e) => 
    @state[e.target.name] = e.target.value

  handleOnPasswordInput : (e) => 
    @state.password = e.target.value

  handleOnNewPasswordInput : (e) => 
    @state.newPassword = e.target.value

  handleOnCofirmPasswordInput : (e) => 
    @state.passwordCheck = e.target.value;

  passwordMatch:()=>
    { password, passwordCheck } = @state;
    password is passwordCheck

  newpasswordMatch:()=>
    { newPassword, passwordCheck } = @state;
    newPassword is passwordCheck;

  renderFeedbackMessage:()=>
    if not @passwordMatch()
      <div className="modal">패스워드가 일치하지 않습니다</div>
      
  renderNewFeedbackMessage:()=>
    if not @newpasswordMatch()
      <div className="modal">패스워드가 일치하지 않습니다</div>

  onSubmit : (e) =>
    e.preventDefault()
    { email, password, userName, phoneNumber } = @state;

    if FlowRouter.getRouteName() is 'signup'
        Accounts.createUser {
          email,
          password},
          profile: {userName, phoneNumber} , (err) =>
          if err
            console.log err
          else 
            FlowRouter.go 'home'      
    else 
      Meteor.user().emails.map((emails) =>
        newPassword = @state.newPassword
        
        Accounts.changePassword password, newPassword, (err) => 
          if err
            console.log err
          else 
            FlowRouter.go 'home'
        
        Meteor.users.update Meteor.userId(),
          $set:
            profile: { 
              userName
              phoneNumber
            }
        )
  componentDidMount:()=>
      if Meteor.user()
        { address } = @props.userinfo.emails[0];
        { userName, phoneNumber } = @props.userinfo.profile;

        @state.email = address;
        @state.userName = userName;
        @state.phoneNumber = phoneNumber;

  render: () =>
      <div>
        <h1>SignUp</h1>
          <Form onSubmit={@onSubmit}>
            { if Meteor.user() 
              <Form.Field>
                <label>Email</label>
                <input disabled placeholder='sample@mail.com'
                  type="email"
                  name="email"
                  readOnly="readonly"
                  value={@state.email}
                  onChange={@handleChage}/>
              </Form.Field>
            else 
              <Form.Field>
                <label>Email</label>
                <input placeholder='sample@mail.com'
                  type="email"
                  name="email"
                  value={@state.email}
                  onChange={@handleChage}/>
              </Form.Field>
            }
            <Form.Field>
              <label>Name</label>
              <input placeholder='Name' 
                name="userName"
                value={@state.userName}
                onChange={@handleChage}/>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password'
                type="password"
                name="password"
                onChange={@handleOnPasswordInput}/>
            </Form.Field>
            { if Meteor.user() 
              <Form.Field>
                <label>New Password</label>
                <input placeholder='Password'
                  type="Password"
                  name="newPassword"
                  onChange={@handleOnNewPasswordInput}/>
              </Form.Field>
            }
            <Form.Field>
              <label>Password Confirm</label>
              <input placeholder='Password Confirm'
                  type="password" 
                onChange={@handleOnCofirmPasswordInput}/>
            </Form.Field>
            { if Meteor.user() then @renderNewFeedbackMessage() else @renderFeedbackMessage()}
            <Form.Field>
              <label>Phone Number</label>
              <input placeholder='Phone'
                name="phoneNumber" 
                value={@state.phoneNumber}
                onChange={@handleChage}/>
            </Form.Field>
            <div className="buttonposition">
              <Button basic><a onClick={() => FlowRouter.go 'home' }>Cancel</a></Button>
              <Button primary type='submit'>Ok</Button>
            </div>
        </Form>
      </div>
