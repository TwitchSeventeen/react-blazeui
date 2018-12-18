import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Footer from './index';

describe('Card.Footer', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Footer>
          lorem
        </Footer>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly as a block', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Footer block>
          lorem
        </Footer>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});