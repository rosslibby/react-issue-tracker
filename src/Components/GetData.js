import React, { Component } from 'react';
import Label from './Label';

class GetData extends Component {
    constructor (props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount = () => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/repos/rails/rails/issues?per_page=25', true);
        xhr.setRequestHeader('Accept', 'application/vnd.github.text+json');
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.setState({ items: JSON.parse(xhr.responseText)});
                }
            }
        };
    }

    formatLabel = (label) => {
        if (label.indexOf('https://api.github.com/repos/') !== -1) {
            let newLabel = label.replace('https://api.', 'https://');
            newLabel = newLabel.replace('.com/repos/', '.com/');

            return newLabel;
        }

        return label;
    }

    render = () => {
        return (
            <ol>
                {this.state.items.map((item) => {
                    return (
                        <li key={ item.id }>
                            <strong>{ item.id }</strong>{' | '}<strong>{ item.title }</strong>{' | '}
                            <a href={ item.html_url } target="_blank">{'[link]'}</a>
                            <p>{ item.body_text.substr(0, 140) }</p>
                            <small><em>{ item.user.login }</em></small>
                            <img src={ item.user.avatar_url + '&s=88' } alt={ item.user.login } />
                            { item.labels.map((label, index) => {
                                return (
                                    <Label
                                        key={ index }
                                        text={ label.name }
                                        url={ this.formatLabel(label.url) }
                                    />
                                );
                            }) }
                        </li>
                    );
                })}
            </ol>
        );
    }
};

export default GetData;