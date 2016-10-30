import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render () {
        return (
            <header className="header">
                <h1 className="center-text">Twitter Code Challenge</h1>
            </header>
        );
    }
};

export default Header;