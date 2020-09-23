import React from 'react';
import { shallow } from 'enzyme';
import Slideshow from './Slideshow';

describe('<Slideshow />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Slideshow />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
