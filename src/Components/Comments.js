import React, { Component } from 'react';
import User from './User';

class Comments extends Component {
    createMarkup (comment) {
        return {__html: comment};
    }

    formatDate (date) {
        let dayOfYear;
        let timeOfDay;
        let year;
        let month;
        let day;
        let hour
        let minute;
        let am;
        let theDay;
        let theTime;
        let finalTime;

        dayOfYear = date.split('T')[0];
        timeOfDay = date.split('T')[1];

        dayOfYear = dayOfYear.split('-');

        year = dayOfYear[0];
        month = dayOfYear[1];
        day = dayOfYear[2];

        timeOfDay = timeOfDay.split(':');

        hour = parseInt(timeOfDay[0], 10);
        minute = timeOfDay[1];
        am = true;

        theDay = month + '/' + day + '/' + year;

        if (hour > 12) {
            am = false;
            hour -= 12;
        } else if (hour === 0) {
            hour = 12;
        }

        theTime = hour + ':' + minute;

        if (am) {
            theTime += ' am';
        } else {
            theTime += ' pm';
        }

        finalTime = theDay + ' at ' + theTime;

        return finalTime;
    }

    render () {
        return (
            <div className="page page--comments">
                <h3 className="page__title">Comments ({ this.props.comments.length })</h3>
                { this.props.comments.map((comment, index) => {
                    const userProps = {
                        avatar: {
                            src: comment.user.avatar_url + '&s=88',
                            width: 26,
                            height: 26
                        },
                        alt: comment.user.login,
                        username: comment.user.login
                    };

                    return (
                        <span
                            className="comment"
                            key={ index }
                        >
                            <span dangerouslySetInnerHTML={ this.createMarkup(comment.body_html) }></span>
                            <div className="comment__data">
                                <User { ...userProps } />
                                <span className="card-data">{ this.formatDate(comment.updated_at) }</span>
                            </div>
                        </span>
                    );
                }) }
            </div>
        );
    }
};

export default Comments;