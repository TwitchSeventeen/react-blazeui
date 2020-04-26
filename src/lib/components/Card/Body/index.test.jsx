import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Body from './index';

describe('Card.Body', () => {
  it('should be defined', () => {
    expect(Body).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Body>
        <p>lorem</p>
      </Body>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
