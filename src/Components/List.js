import React, { Component, PropTypes } from 'react';
import Title from './Title';
import Label from './Label';

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

                        return (
                            <li key={ item.id }>
                                <Title { ...titleProps } />
                                <a href={ item.html_url } target="_blank">{'[external link]'}</a>
                                <p>{ item.body_text.substr(0, 140) }</p>
                                <small><em>{ item.user.login }</em></small>
                                <img src={ item.user.avatar_url + '&s=88' } alt={ item.user.login } />
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