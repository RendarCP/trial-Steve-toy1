import React, { Component } from 'react';
import { Input,List, Image,Button, Icon,Label,Card,extra } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
class DetailUser extends Component {
    render() {
        return (
            <div className='chatProfile'>
                    <Card
                        image='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        header={this.props.email}
                        description={this.props.phone}
                        extra={extra}
                    />
            </div>
        );
    }
}

export default DetailUser;