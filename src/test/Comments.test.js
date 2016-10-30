import React from 'react';
import renderer from 'react-test-renderer';
import { Comments } from '../Components/';

it('should set innerHTML', () => {
    const data = [
        {
            body_html: '<p>test</p>',
            user: {
                avatar_url: '#',
                login: 'username',
                usernam: 'username'
            },
            updated_at: '2016-10-29T20:36:46Z'
        }
    ];
    const comments = renderer.create(<Comments comments={ data } />);

    let tree = comments.toJSON();

    expect(tree.children[1].children[0].props.dangerouslySetInnerHTML.__html).toEqual('<p>test</p>');
});

it('should render all the comments available', () => {
    const data = [
        {
            body_html: '<p>alpha</p>',
            user: {
                avatar_url: '#',
                login: 'username',
                usernam: 'username'
            },
            updated_at: '2016-10-29T20:36:46Z'
        },
        {
            body_html: '<span>beta</span>',
            user: {
                avatar_url: '#',
                login: 'username',
                usernam: 'username'
            },
            updated_at: '2016-10-29T20:36:46Z'
        },
        {
            body_html: '<a href="#">gamma</a>',
            user: {
                avatar_url: '#',
                login: 'username',
                usernam: 'username'
            },
            updated_at: '2016-10-29T20:36:46Z'
        }
    ];
    const comments = renderer.create(<Comments comments={ data } />);
    const tree = comments.toJSON();

    expect(tree.children.length).toEqual(4);
});