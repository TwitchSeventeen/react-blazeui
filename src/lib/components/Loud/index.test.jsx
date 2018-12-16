import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Loud from './index';

describe('Loud', () => {
  it('should be defined', () => {
    expect(Loud).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Loud>
          lorem ipsum dolor
        </Loud>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
