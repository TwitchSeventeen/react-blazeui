import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import HeaderCell from './index';

describe('HeaderCell', () => {
  it('should be defined', () => {
    expect(HeaderCell).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <HeaderCell>
        lorem ipsum dolor
      </HeaderCell>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
