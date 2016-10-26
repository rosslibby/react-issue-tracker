import React, { Component, PropTypes } from 'react';

class List extends Component {
    render = () => {
        return (
            <ul>
                {this.props.items.map((item) => {
                    return (
                        <li key={ item.key }>{ item.text }</li>
                    );
                })}
            </ul>
        );
    }
};

List.propTypes = {
    text: PropTypes.string.isRequired
};

List.defaultProps = {
    text: 'Text goes here'
};

export default List;