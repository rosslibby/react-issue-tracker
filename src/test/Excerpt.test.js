import React from 'react';
import { shallow } from 'enzyme';
import { Excerpt } from '../Components/';

it('renders a <= 140 character excerpt', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non nunc quis metus porta elementum. Nunc consequat sollicitudin cursus. Aenean pulvinar dictum orci, fermentum efficitur risus suscipit sed. Donec sodales, nulla eu lacinia commodo, sapien tortor tincidunt felis, vel egestas justo urna imperdiet mi. Nulla condimentum enim et lorem elementum varius. Sed condimentum porta ipsum nec scelerisque. Quisque vitae tortor odio.';
    const excerpt = shallow(<Excerpt text={ str } />);
    const p = <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non nunc quis metus porta elementum. Nunc consequat sollicitudin cursus....</p>;

    expect(excerpt.contains(p)).toEqual(true);
});