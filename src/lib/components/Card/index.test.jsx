import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Card from './index';

describe('Card', () => {
  it('should be defined', () => {
    expect(Card).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Card>
          <p>lorem</p>
        </Card>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});