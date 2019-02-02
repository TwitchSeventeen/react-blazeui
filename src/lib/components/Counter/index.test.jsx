import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Counter from './index';

describe('Counter', () => {
  it('should be defined', () => {
    expect(Counter).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Counter start={100} value={0} />,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with prefix and suffix', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Counter start={100} value={0} prefix="£" suffix=" lorem" />,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
