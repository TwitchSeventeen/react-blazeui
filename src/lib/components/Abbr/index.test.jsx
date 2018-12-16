import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Abbr from './index';

describe('Abbr', () => {
  it('should be defined', () => {
    expect(Abbr).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Abbr title="Help text">
          lorem ipsum dolor
        </Abbr>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
