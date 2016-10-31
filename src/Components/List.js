import React, { Component, PropTypes } from 'react';
import Card from './Card';

class List extends Component {
    render () {
        return (
            <div className="cards">
                {this.props.items.map((item) => {
                    const titleProps = {
                        click: () => {
                            this.fetchIssue(item.number);
                        },
                        id: item.number,
                        text: item.title
                    };

                    const excerptProps = {
                        text: item.body_text
                    };

                    const userProps = {
                        avatar: {
                            src: item.user.avatar_url + '&s=88',
                            width: 26,
                            height: 26
                        },
                        alt: item.user.login,
                        username: item.user.login
                    };

                    const cardProps = {
                        title: titleProps,
                        excerpt: excerptProps,
                        user: userProps,
                        url: item.html_url,
                        comments: item.comments,
                        labels: item.labels,
                        id: item.id,
                        key: item.id
                    };

                    return (
                        <Card { ...cardProps } />
                    );
                })}
            </div>
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