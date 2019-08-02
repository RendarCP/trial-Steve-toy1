import { Container, Header, TextArea, Form, Button, Icon } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor'
import 'moment'

import PostComment from './PostComment'

export default observer class PostDetail extends Component 
  constructor:(props) ->
    super props
    @state = observable 
      comment: ''

  handleChange: (e) => 
    @state.comment = e.target.value
  

  handleLike: (e) => 
    { posts } = @props
    currentUserId = Meteor.userId()
    isFavorite = posts.favorite.includes currentUserId

    if isFavorite 
      Meteor.call 'post.favorite.remove', posts._id, currentUserId
    else 
      Meteor.call 'post.favorite', posts._id, currentUserId 
    

  PostEdit: () => 
    { posts } = @props;

    isPostOwner = posts.owner is Meteor.userId()

    if isPostOwner
      <a onClick={() => FlowRouter.go "/postedit/#{posts._id}"} key={posts._id}><Button primary>Post Edit</Button></a>
    else
      null

  SubmitComment : (e) => 
    comment = @state.comment;
    postsId = FlowRouter.getParam 'id' 
    
    if not comment.trim()
      alert '댓글을 입력하셔야됩니다' 
    else 
      Meteor.call 'comments.insert', postsId, comment, (err) => 
        if err 
          console.log(err);
        else 
          @state.comment = '';

  renderPostDetail : () => 
    { posts, isPostReady } = @props;  
    
    if not Meteor.userId() 
      alert "로그인이 필요합니다"
      FlowRouter.go 'home'

    if isPostReady
        <Container key={posts._id} text style={{ marginTop: '7em' }}>
          <Icon 
            onClick={@handleLike} 
            color='red'
            name={posts.favorite.includes if Meteor.userId() then 'heart' else 'heart outline'} 
            className="heart" 
            size='big'
          />
          <Header className="Posts" as='h1'>{posts.title}</Header>
          <p className="Posts">{posts.description}</p>
          <p className="Postscontent">{posts.content}</p>
          {this.PostEdit()}
        </Container>
    else 
      <div>loading....</div>

  render : () => 
    { comments } = @props;

    (<div className="postDetail">
      {@renderPostDetail()}
      <Container text style={{ marginTop: '7em' }}>
        <Form onSubmit={this.SubmitComment} onKeyPress={this.handleKey}>
          <Form.Field 
            control={TextArea} 
            value={@state.comment} 
            name='comment' 
            onChange={@handleChange} 
            label='Comment' 
            placeholder='Tell us more about you...' 
          />
          <Button primary type='submit'>ADD COMMENT</Button>
        </Form>
        {comments.map((comment)=> <PostComment key={comment._id} {...comment}/>)}
      </Container>
    </div>)
