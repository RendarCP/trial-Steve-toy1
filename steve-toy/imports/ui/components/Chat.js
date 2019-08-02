import { Input,List, Button, Form } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import Message from '../components/Message';

export default observer(class Chat extends Component {
  state = observable({
    chatting: '',
  });

  handleChange = (e) => {
    this.state.chatting = e.target.value
  }

  submitChat = (e) => {
    const chatting = this.state.chatting;
    
    if(!chatting.trim()){
      return console.log('빈값은 삽입될수 없습니다');
    }

    if(Meteor.user()) {
      Meteor.call('chats.insert',chatting,(err)=>{
        if(err){
          console.log(err);
        } else {
          this.state.chatting = '';
        }
      });
    }
  }

  renderChat(){
    return this.props.chats.map((chat)=>{
        if(Meteor.user()) {
          return <Message key={chat._id} {...chat}/>
        } else {
          console.log('로그인 필요');
        }
    });
  }
  
  render() {
    return (
      <div>
        <List className="chatscroll">
          {this.renderChat()}
        </List>
        <Form onSubmit={this.submitChat}>
          <Input 
            onChange={this.handleChange}
            value={this.state.chatting} 
            name='chatting' label='채팅' 
            placeholder='Tell us more about you...'/>
          <Button type='submit' primary>Send</Button>
        </Form>
      </div>
    );
  }
});
