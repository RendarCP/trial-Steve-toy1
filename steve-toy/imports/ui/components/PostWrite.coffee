import { Button, Form, TextArea } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';

export default observer class PostWrite extends Component 
  constructor:(props) ->
    super props
    @state = observable
      title:'',
      description:'',
      content:'',
      alert:''

  handleChage : (e) => 
    @state[e.target.name] = e.target.value
  

  handleSubmit : (e) => 
    e.preventDefault()
    { title, description, content } = @state;

    if FlowRouter.getRouteName() is 'postwrite'
      if title is '' or description is '' or content is ''
        @state.alert = '3가지 모두 필수 입력입니다!'
      else 
        Meteor.call 'post.insert', title, description, content,(err) => 
          if err
            console.log err
          else 
            FlowRouter.go 'home'
    else 
      if title is '' or description is '' or content is '' 
        @state.alert = '3가지 모두 필수 입력입니다!'
      else 
        Meteor.call 'post.update', FlowRouter.getParam 'id' , title, description, content, (err) => 
          if err
            console.log err
          else 
            FlowRouter.go 'home'
            alert '업데이트 성공'
  componentDidMount: =>
    if Meteor.user()
      { title, description, content } = @props.posts or {}

      @state.title = title;
      @state.description = description;
      @state.content = content;

  render: () => 
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input 
            placeholder='Title Only'
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChage}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input 
            placeholder='Name' 
            name="description"
            value={this.state.description}
            onChange={this.handleChage}
          />
        </Form.Field>
        <Form.Field 
          control={TextArea} 
          label='Content' 
          placeholder='Tell us more about you...' 
          name='content'
          value={this.state.content}
          onChange={this.handleChage}
        />
        <a onClick={() => FlowRouter.go('home')}><Button basic>Cancel</Button></a>
        <Button primary type='submit'>Save</Button>
        <div className="modal">{this.state.alert}</div>
      </Form>