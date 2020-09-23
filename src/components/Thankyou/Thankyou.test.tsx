import React from 'react';
import { shallow } from 'enzyme';
import Thankyou from './Thankyou';

describe('<Thankyou />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Thankyou />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
