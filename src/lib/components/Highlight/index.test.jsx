import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Highlight from './index';

describe('Highlight', () => {
  it('should be defined', () => {
    expect(Highlight).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Highlight>
        lorem ipsum dolor
      </Highlight>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
