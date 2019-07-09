import React, { Component } from 'react';
import { Input,List, Image,Button,Form, TextArea } from 'semantic-ui-react'

class ChatForm extends Component {
    render() {
        return (
            <div className="chatForm">
                <div className="chatList">
                    <Input icon='search' placeholder='Search...' />
                     <List>
                        <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                        <List.Content>
                            <List.Header as='a'>Rachel</List.Header>
                            <List.Description>
                            Last seen watching{' '}
                            <a>
                                <b>Arrested Development</b>
                            </a>{' '}
                            just now.
                            </List.Description>
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
                        <List.Content>
                            <List.Header as='a'>Lindsay</List.Header>
                            <List.Description>
                            Last seen watching{' '}
                            <a>
                                <b>Bob's Burgers</b>
                            </a>{' '}
                            10 hours ago.
                            </List.Description>
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matthew.png' />
                        <List.Content>
                            <List.Header as='a'>Matthew</List.Header>
                            <List.Description>
                            Last seen watching{' '}
                            <a>
                                <b>The Godfather Part 2</b>
                            </a>{' '}
                            yesterday.
                            </List.Description>
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                        <List.Content>
                            <List.Header as='a'>Jenny Hess</List.Header>
                            <List.Description>
                            Last seen watching{' '}
                            <a>
                                <b>Twin Peaks</b>
                            </a>{' '}
                            3 days ago.
                            </List.Description>
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
                        <List.Content>
                            <List.Header as='a'>Veronika Ossi</List.Header>
                            <List.Description>Has not watched anything recently</List.Description>
                        </List.Content>
                        </List.Item>
                    </List>
                </div>
                <div className="chatProfile">
                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='tiny' circular />
                    <Button primary>번호</Button>
                    <Button secondary>이메일</Button>
                </div>
                <div className="Chat">
                     <Form>
                        <Form.Field label='An HTML <textarea>' control='textarea' rows='3' />
                    </Form>
                </div>
            </div>
        );
    }
}

export default ChatForm;