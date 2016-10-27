import React, { Component } from 'react';

class Comments extends Component {
    render () {
        return (
            <div>
                { this.props.comments.map((comment, index) => {
                    console.log(comment);
                    return (
                        <span key={index}>{ comment.body }</span>
                    );
                }) }
            </div>
        );
    }
};

export default Comments;