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
      <Item>
          lorem ipsum dolor
      </Item>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly as the last item', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Item last>
          lorem ipsum dolor
      </Item>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with success styling', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Item type="success">
          lorem ipsum dolor
      </Item>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with loading styling', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Item loading>
          lorem ipsum dolor
      </Item>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with left styling', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Item left>
          lorem ipsum dolor
      </Item>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
