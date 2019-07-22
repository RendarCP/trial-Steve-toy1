import React, { Component } from 'react';
import { Button, Form, Icon,TextArea } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
// import { Posts } from '../../api/post.js';
import Posts from '../../api/post.js';
import {withTracker} from 'meteor/react-meteor-data';

class PostWrite extends Component {
    state={
        title:'',
        description:'',
        content:'',
        alert:''
    }
    handleChage=(e) =>{
        this.setState({
            [e.target.name]: e.target.value,
            //passwordCheck: e.target.password.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const Title = this.state.title;
        const Description = this.state.description;
        const Content = this.state.content;
        if(this.props.match.path == '/postwrite'){
            if(Title =='' || Description=='' || Content==''){
                this.setState({
                    alert:'3가지 모두 필수 입력입니다!',
                })
            }
            else{
                Meteor.call('post.insert',Title,Description,Content,(err)=>{
                    if(err){
                        this.setState({
                            error:{none:err.reason},
                        })
                    }
                    else{
                        this.props.history.push('/');
                    }
                });
            }
        }
        else{
            if(Title =='' && Description=='' &&Content==''){
                this.setState({
                    alert:'3가지 모두 필수 입력입니다!',
                })
                //alert('필수 입력사항 입니다 ');
            }
            else{
                Meteor.call('post.update',this.props.match.params.id,Title,Description,Content,(err)=>{
                    if(err){
                        this.setState({
                            error:{none:err.reason},
                        })
                    }
                    else{
                        this.props.history.push('/');
                        alert('업데이트 성공');
                    }
                })
            }
        }
    }
    componentDidMount(){
        if(Meteor.user()){
            return this.props.posts.map((posts)=>{
                this.setState({
                    title:posts.title,
                    description:posts.description,
                    content:posts.content,
                })
            })
        }
    }
    render() {
        // const test = this.props.match.url
        // console.log(test);
        return (
            <div>
                <h1>포스트 작성 화면입니다</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Title</label>
                        <input placeholder='Title Only'
                         type="text"
                         name="title"
                         value={this.state.title}
                         onChange={this.handleChage}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Name' 
                         name="description"
                         value={this.state.description}
                         onChange={this.handleChage}/>
                    </Form.Field>
                    <Form.Field control={TextArea} label='Content' placeholder='Tell us more about you...' 
                        name='content'
                        value={this.state.content}
                        onChange={this.handleChage}/>
                    {/* <Button basic><Link to="/">Cancel</Link></Button> */}
                    <Link to="/"><Button basic>Cancel</Button></Link>
                    <Button primary type='submit'>Save</Button>
                    <div className="modal">{this.state.alert}</div>
                </Form>
            </div>
        );
    }
}

export default withTracker((props)=>{
    Meteor.subscribe('post').ready();
    const Idtest = props.match.params.id
    return{
        posts:Posts.find({_id:Idtest}).fetch()
    }
})(PostWrite);