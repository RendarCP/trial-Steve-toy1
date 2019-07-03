import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                {/* <button>Blog Write</button>
                <button>Favorite</button>
                <label>toy project</label> */}
                <Link to="/login">LOG IN</Link>  
                <Link to="/signup">SIGN UP</Link>
            </div>
        );
    }
}

export default Header;