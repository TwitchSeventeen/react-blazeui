import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Caption from './index';

describe('Caption', () => {
  it('should be defined', () => {
    expect(Caption).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Caption>
          lorem ipsum dolor
      </Caption>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
