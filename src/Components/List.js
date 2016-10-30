import React, { Component, PropTypes } from 'react';
import Excerpt from './Excerpt';
import Labels from './Labels';
import Title from './Title';
import User from './User';

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

                    return (
                        <div className="card" key={ item.id }>
                            <Title { ...titleProps } />
                            <Excerpt { ...excerptProps }  />
                            <div>
                                <Labels labels={ item.labels } />
                                <User { ...userProps } />
                                <span className="card-data">{ 'Comments: ' + item.comments }</span>
                                <span className="card-data">
                                    <a
                                        className="card-data__link"
                                        href={ item.html_url }
                                        target="_blank"
                                    >{'external link'}</a>
                                </span>
                            </div>
                        </div>
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