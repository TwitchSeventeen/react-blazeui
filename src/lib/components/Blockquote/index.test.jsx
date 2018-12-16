import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Blockquote from './index';

describe('Blockquote', () => {
  it('should be defined', () => {
    expect(Blockquote).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Blockquote cite="~ Greg">
          lorem ipsum dolor
        </Blockquote>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without a footer', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Blockquote>
          lorem ipsum dolor
        </Blockquote>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
