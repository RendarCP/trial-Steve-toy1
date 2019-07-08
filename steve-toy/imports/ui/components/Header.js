import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                {/* <button>Blog Write</button>
                <button>Favorite</button>
                <label>toy project</label> */}
                <div>
                        <Link to="/" className="mainButton">Steve Toy Project</Link>
                        <Button basic className="loginButton"><Link to="/login">LOG IN</Link></Button>
                        <Button basic className="loginButton"><Link to="/signup">SIGN UP</Link></Button>
                </div>
            </div>
        );
    }
}

export default Header;