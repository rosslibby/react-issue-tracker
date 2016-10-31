import React, { Component } from 'react';
import Excerpt from './Excerpt';
import Labels from './Labels';
import Title from './Title';
import User from './User';
import CardData from './CardData';

class Card extends Component {
    render () {
        const titleProps = this.props.title;
        const excerptProps = this.props.excerpt;
        const userProps = this.props.user;
        const commentProps = {
            link: false,
            text: 'Comments: ' + this.props.comments
        };
        const linkProps = {
            link: true,
            text: 'external link',
            url: this.props.url,
            target: '_blank'
        };

        return (
            <div className="card" key={ this.props.id }>
                <Title { ...titleProps } />
                <Excerpt { ...excerptProps }  />
                <div>
                    <Labels labels={ this.props.labels } />
                    <User { ...userProps } />
                    <CardData { ...commentProps } />
                    <CardData { ...linkProps } />
                </div>
            </div>
        );
    }
};

export default Card;