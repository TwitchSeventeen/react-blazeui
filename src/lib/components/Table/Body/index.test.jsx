import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Body from './index';

describe('Body', () => {
  it('should be defined', () => {
    expect(Body).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Body>
        lorem ipsum dolor
      </Body>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
