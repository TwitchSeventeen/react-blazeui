import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Cell from './index';

describe('Cell', () => {
  it('should be defined', () => {
    expect(Cell).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Cell>
          lorem ipsum dolor
      </Cell>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
