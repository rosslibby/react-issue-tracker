import React, { Component } from 'react';
import Label from './Label';

class Labels extends Component {
    render () {
        return (
            <div className={ this.props.className }>
                { this.props.labels.map((label, index) => {
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
            </div>
        );
    }
};

Labels.defaultProps = {
    className: 'labels'
};

export default Labels;