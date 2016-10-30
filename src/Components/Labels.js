import React, { Component } from 'react';
import Label from './Label';

class Labels extends Component {
    render () {
        return (
            <div className="labels">
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

export default Labels;