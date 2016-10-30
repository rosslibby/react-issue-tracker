import React from 'react';
import renderer from 'react-test-renderer';
import { Title } from '../Components/';

const data = {
    click: () => {
        console.log('action');
    },
    id: 1,
    text: 'test'
};
const title = renderer.create(<Title { ...data } />);
let tree = title.toJSON();

it('should have two child elements', () => {
    expect(tree.children.length).toEqual(2);
});

it('should have <span> as first child', () => {
    expect(tree.children[0].type).toEqual('span');
});

it('should have a click handler for the issue number', () => {
    expect(typeof tree.children[0].props.onClick).toEqual('function');
});

it('should have <h2> with nested <a> as last child', () => {
    expect(tree.children[1].type).toEqual('h2');
    expect(tree.children[1].children[0].type).toEqual('a');
});

it('should have a click handler for the issue title', () => {
    expect(typeof tree.children[1].children[0].props.onClick).toEqual('function');
});