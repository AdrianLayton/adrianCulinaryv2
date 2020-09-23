import React from 'react';
import { shallow } from 'enzyme';
import Recipe from './Recipe';

describe('<Recipe />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Recipe />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
