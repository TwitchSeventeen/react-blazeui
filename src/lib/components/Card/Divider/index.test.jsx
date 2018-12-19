import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Divider from './index';

describe('Card.Divider', () => {
  it('should be defined', () => {
    expect(Divider).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Divider>
          lorem
        </Divider>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a colour', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Divider type="brand">
          lorem
        </Divider>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly as a separator', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Divider separator />
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});