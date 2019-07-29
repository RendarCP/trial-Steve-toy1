import React, { Component } from 'react';
import { Input,List, Image,Button, Icon,Label,Card,extra } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
class DetailUser extends Component {
    render() {
        return (
            <div className='chatProfile'>
                    {/* <Image src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' size='tiny' circular />
                    <List divided selection>
                       {Meteor.user() ? (<List.Item>
                            <Label size='large'><Icon name='phone'/>{this.props.email}</Label>
                        </List.Item>):null}
                        {Meteor.user() ? (<List.Item>
                            <Label size='large'><Icon name='mail'/>{this.props.phone}</Label>
                        </List.Item>):null}
                    </List> */}
                    <Card
                        image='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        header={this.props.email}
                        // meta='Friend'
                        description={this.props.phone}
                        extra={extra}
                    />
            </div>
        );
    }
}

export default DetailUser;