import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Item from './index';

describe('Item', () => {
  it('should be defined', () => {
    expect(Item).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Item>ipsum</Item>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly an unstyled Item', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Item unstyled>ipsum</Item>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
