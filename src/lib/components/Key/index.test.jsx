import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Key from './index';

describe('Key', () => {
  it('should be defined', () => {
    expect(Key).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Key>
        key
      </Key>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
