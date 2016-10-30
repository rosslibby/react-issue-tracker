import React, { Component } from 'react';

class Comments extends Component {
    createMarkup (comment) {
        return {__html: comment};
    }

    render () {

        return (
            <div>
                { this.props.comments.map((comment, index) => {
                    console.log(comment);
                    return (
                        <span
                            key={ index }
                            dangerouslySetInnerHTML={ this.createMarkup(comment.body_html) }
                        ></span>
                    );
                }) }
            </div>
        );
    }
};

export default Comments;