import React, { Component } from 'react';

class ListItem extends Component {
    render = () => {
        return (
            <ul>
                {this.props.items.map((item) => {
                    <li>{item.text}</li>
                })}
            </ul>
        );
    }
};

export List;