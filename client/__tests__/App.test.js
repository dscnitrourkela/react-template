import React from 'react';
import { shallow } from 'enzyme';

// components
import App from '../src/views/App';

function setup() {
  const props = {
    imgPath: '../src/static/logo.svg',
  };
  const wrapper = shallow(<App />);
  return { wrapper, props };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should render an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
