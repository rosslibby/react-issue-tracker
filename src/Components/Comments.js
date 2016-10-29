import React, { Component } from 'react';

class Comments extends Component {
    render () {

        return (
            <div>
                { this.props.comments.map((comment, index) => {
                    return (
                        <span
                            key={ index }
                            dangerouslySetInnerHTML={{__html: comment.body_html }}
                        ></span>
                    );
                }) }
            </div>
        );
    }
};

export default Comments;