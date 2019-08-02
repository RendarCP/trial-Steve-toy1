import { Button, Form } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

export default observer(class SignUp extends Component {
  state = observable({
    email: '',
    userName: '',
    password: '',
    newPassword: '',
    passwordCheck: '',
    phoneNumber: ''
  });
  handleChage=(e) => {
    this.state[e.target.name] = e.target.value;
  }
  handleOnPasswordInput = (e) => {
    this.state.password = e.target.value;
  }
  handleOnNewPasswordInput = (e) => {
    this.state.newPassword = e.target.value;
  }
  handleOnCofirmPasswordInput = (e) => {
    this.state.passwordCheck = e.target.value;
  }
  passwordMatch(){
    const { password, passwordCheck } = this.state;
    return password === passwordCheck;
  }
  newpasswordMatch(){
    const { newPassword, passwordCheck } = this.state;
    return newPassword === passwordCheck;
  }
  renderFeedbackMessage(){
    if(!this.passwordMatch()){
      return (
        <div className="modal">패스워드가 일치하지 않습니다</div>
      );
    }
  }
  renderNewFeedbackMessage(){
    if(!this.newpasswordMatch()){
      return (
        <div className="modal">패스워드가 일치하지 않습니다</div>
      );
    }
  }
  onSubmit=(e)=>{
    e.preventDefault();
    const { email, password, userName, phoneNumber } = this.state;

    if(FlowRouter.getRouteName() === 'signup'){
        Accounts.createUser({
          email,
          password,
          profile: { userName, phoneNumber,}
        }, (err)=>{
          if(err){
            console.log(err);
          } else {
            FlowRouter.go('home');
          }
      });
    } else {
      return Meteor.user().emails.map((emails)=>{
        const newPassword = this.state.newPassword;
        
        Accounts.changePassword(password, newPassword, (err) => {
          if(err){
            console.log(err);
          } else {
            FlowRouter.go('home');
          }
        });

        Meteor.users.update(Meteor.userId(),
          {
            $set: { profile: { userName, phoneNumber } }
          }  
        );
      })
    }
  }
  componentDidMount(){
    if(Meteor.user()){
      const { address } = this.props.userinfo.emails[0];
      const { userName, phoneNumber } = this.props.userinfo.profile;

      this.state.email = address;
      this.state.userName = userName;
      this.state.phoneNumber = phoneNumber;
    }
  }
  render() {
    return (
      <div>
        <h1>SignUp</h1>
          <Form onSubmit={this.onSubmit}>
            {Meteor.user()? (<Form.Field>
              <label>Email</label>
              <input disabled placeholder='sample@mail.com'
                type="email"
                name="email"
                readOnly="readonly"
                value={this.state.email}
                onChange={this.handleChage}/>
            </Form.Field>) : (<Form.Field>
              <label>Email</label>
              <input placeholder='sample@mail.com'
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChage}/>
            </Form.Field>)}
            <Form.Field>
              <label>Name</label>
              <input placeholder='Name' 
                name="userName"
                value={this.state.userName}
                onChange={this.handleChage}/>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password'
                //onChange={e=>this.handleOnPasswordInput(e.target.value)} />
                type="password"
                name="password"
                onChange={this.handleOnPasswordInput}/>
            </Form.Field>
            {Meteor.user() ? (<Form.Field>
              <label>New Password</label>
              <input placeholder='Password'
                type="Password"
                name="newPassword"
                onChange={this.handleOnNewPasswordInput}/>
            </Form.Field>):null}
            <Form.Field>
              <label>Password Confirm</label>
              <input placeholder='Password Confirm'
                  type="password" 
                onChange={this.handleOnCofirmPasswordInput}/>
            </Form.Field>
            {Meteor.user() ? this.renderNewFeedbackMessage() : this.renderFeedbackMessage()}
            <Form.Field>
              <label>Phone Number</label>
              <input placeholder='Phone'
                name="phoneNumber" 
                value={this.state.phoneNumber}
                onChange={this.handleChage}/>
            </Form.Field>
            <div className="buttonposition">
              <Button basic><a onClick={() => FlowRouter.go('home')}>Cancel</a></Button>
              <Button primary type='submit'>Ok</Button>
            </div>
        </Form>
      </div>
    );
  }
});
