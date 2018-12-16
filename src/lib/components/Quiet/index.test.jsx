import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Quiet from './index';

describe('Quiet', () => {
  it('should be defined', () => {
    expect(Quiet).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Quiet>
          lorem ipsum dolor
        </Quiet>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
