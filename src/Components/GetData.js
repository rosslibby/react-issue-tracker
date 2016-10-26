import React, { Component } from 'react';

class GetData extends Component {
    constructor (props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount = () => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/repos/rails/rails/issues?per_page=25');
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.setState({ items: JSON.parse(xhr.responseText)});
                }
            }
        };
    }

    render = () => {
        return (
            <ol>
                {this.state.items.map((item) => {
                    return (
                        <li key={item.id}>{item.url}</li>
                    );
                })}
            </ol>
        );
    }
};

export default GetData;