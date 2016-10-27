import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render () {
        return (
            <ul className="issue-header">
                <li><Link to={'/'}>Go back</Link></li>
            </ul>
        );
    }
};

export default Header;