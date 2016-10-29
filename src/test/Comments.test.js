import React from 'react';
import { shallow } from 'enzyme';
import { Comments } from '../Components/';

it('renders the number of comments that are passed in', () => {
    const data = [
        {
            body_html: 'This is the first comment.'
        },
        {
            body_html: 'This is the second comment.'
        }
    ];
    const comments = shallow(<Comments comments={ data } />);
    const firstComment = <span key="0">This is the first comment.</span>;
    const secondComment = <span key="1">This is the second comment.</span>;

    expect(comments.contains(firstComment)).toEqual(true);
});