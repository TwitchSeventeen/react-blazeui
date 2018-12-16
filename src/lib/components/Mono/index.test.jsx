import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Mono from './index';

describe('Mono', () => {
  it('should be defined', () => {
    expect(Mono).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Mono>
          lorem ipsum dolor
        </Mono>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
