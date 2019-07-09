import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Input, Menu } from 'semantic-ui-react'
class Header extends Component {
    render() {
        //const { activeItem } = this.state
        return (
            <div>
                {/* <button>Blog Write</button>
                <button>Favorite</button>
                <label>toy project</label> */}
                <div className="Nav">
                    <Menu secondary color='teal'>
                        <Menu.Menu position='left'>
                        <Link to="/postWrite"><Button basic>Blog Write</Button></Link>
                            <Button basic>Favorite</Button>
                        </Menu.Menu>
                        <Link to="/" className="mainButton">Steve Toy Project</Link>
                        <Menu.Menu position='right'>
                        <Link to="/login"><Button basic className="loginButton">LOG IN</Button></Link>
                        <Link to="/signup"><Button basic className="signUpButton">SIGN UP</Button></Link>
                        </Menu.Menu>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default Header;