import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Badge from './index';

describe('Badge', () => {
  it('should be defined', () => {
    expect(Badge).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Badge>lorem</Badge>);

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a type', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Badge type="success">lorem</Badge>);

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with rounded corners', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Badge type="error" rounded>lorem</Badge>);

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with rounded corners', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Badge ghost>lorem</Badge>);

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});