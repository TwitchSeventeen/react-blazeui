import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Item from './index';

describe('Breadcrumbs.Item', () => {
  it('should be defined', () => {
    expect(Item).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Item>
          <a href="#">lorem</a>
        </Item>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly an active Item', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Item active>
          lorem
        </Item>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
