import React from 'react';
import { shallow } from 'enzyme';
import Savingcalc from './Savingcalc';

describe('<Savingcalc />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Savingcalc />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
