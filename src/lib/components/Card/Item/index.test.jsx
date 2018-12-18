import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Item from './index';

describe('Card.Item', () => {
  it('should be defined', () => {
    expect(Item).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Item>
          <p>lorem</p>
        </Item>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a colour', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Item type="success">
          <p>lorem</p>
        </Item>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});