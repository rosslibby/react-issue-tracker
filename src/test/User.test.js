import React from 'react';
import renderer from 'react-test-renderer';
import { User } from '../Components/';

const data = {
    avatar: {
        src: 'http://placehold.it/44x44',
        width: 44,
        height: 44
    },
    username: 'username'
};
const user = renderer.create(<User { ...data } />);
let tree = user.toJSON();

it('should have two children', () => {
    expect(tree.children.length).toEqual(2);
});

it('should have <img> as first child', () => {
    expect(tree.children[0].type).toEqual('img');
});

it('should have <span> as last child', () => {
    expect(tree.children[1].type).toEqual('span');
});

it('should have a single word in the <span> tag', () => {
    expect(tree.children[1].children.length).toEqual(1);
});