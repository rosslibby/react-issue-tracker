import React from 'react';
import { shallow } from 'enzyme';
import { Comments } from '../Components/';

it('renders the number of comments that are passed in', () => {
    const data = [
        {body_html: 'alpha'},
        {body_html: 'beta'}
    ];
    const comments = shallow(<Comments comments={ data } />);
    const commentsHtml = <div>
                            <span dangerouslySetInnerHTML={{"__html": "alpha"}} />
                            <span dangerouslySetInnerHTML={{"__html": "beta"}} />
                        </div>;

    expect(comments.contains(commentsHtml)).toBe(true);
});