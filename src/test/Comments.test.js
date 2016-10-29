import React from 'react';
import renderer from 'react-test-renderer';
import { Comments } from '../Components/';

it('should set innerHTML', () => {
    const data = [
        {
            body_html: '<p>test</p>'
        }
    ];
    const comments = renderer.create(<Comments comments={ data } />);

    let tree = comments.toJSON();

    expect(tree.children[0].props.dangerouslySetInnerHTML.__html).toEqual('<p>test</p>');
});

it('should render all the comments available', () => {
    const data = [
        {
            body_html: '<p>alpha</p>'
        },
        {
            body_html: '<span>beta</span>'
        },
        {
            body_html: '<a href="#">gamma</a>'
        }
    ];
    const comments = renderer.create(<Comments comments={ data } />);
    const tree = comments.toJSON();

    expect(tree.children.length).toEqual(3);
});