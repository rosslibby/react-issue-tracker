import React from 'react';
import renderer from 'react-test-renderer';
import { Label } from '../Components/';

it('should have a link', () => {
    const label = renderer.create(<Label />);

    let tree = label.toJSON();

    expect(tree).toMatchSnapshot();
});