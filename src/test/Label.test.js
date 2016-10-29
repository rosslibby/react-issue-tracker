import React from 'react';
import renderer from 'react-test-renderer';
import { Label } from '../Components/';

it('should have a link', () => {
    const label = renderer.create(<Label />);

    let tree = label.toJSON();

    expect(tree.type).toEqual('a');
});

it('should reformat URL and render text from props', () => {
    const data = {
        text: 'Alpha',
        url: 'https://api.github.com/repos/rails/rails/issues'
    };
    const label = renderer.create(<Label { ...data } />);

    let tree = label.toJSON();

    expect(tree.props.href).toEqual('https://github.com/rails/rails/issues');
    expect(tree.children[0]).toEqual('Alpha');
});