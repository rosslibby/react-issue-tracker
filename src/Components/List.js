import React, { Component, PropTypes } from 'react';
import Excerpt from './Excerpt';
import Label from './Label';
import Title from './Title';
import User from './User';

class List extends Component {
    render () {
        return (
            <ul>
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
                            width: 44,
                            height: 44
                        },
                        alt: item.user.login,
                        username: item.user.login
                    };

                    return (
                        <li key={ item.id }>
                            <Title { ...titleProps } />
                            <a
                                className="title-link"
                                href={ item.html_url }
                                target="_blank"
                            >{'external link'}</a>
                            <Excerpt { ...excerptProps }  />
                            <User { ...userProps } />
                            { item.labels.map((label, index) => {

                                const labelProps = {
                                    key: index,
                                    text: label.name,
                                    url: label.url
                                };

                                return (
                                    <Label
                                        { ...labelProps }
                                    />
                                );
                            }) }
                            <span className="comments-count">{ 'Comments: ' + item.comments }</span>
                        </li>
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