import React from 'react';
import { shallow } from 'enzyme';
import Cookware from './Cookware';

describe('<Cookware />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Cookware />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
