import React from 'react';
import { shallow } from 'enzyme';
import { Label } from '../Components/';

it('renders a link', () => {
    const label = shallow(<Label />);
    const link = <a href="#" target="_blank">link text</a>;

    expect(label.contains(link)).toEqual(true);
});