import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Alert from './index';

describe('Alert', () => {
  it('should be defined', () => {
    expect(Alert).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Alert>lorem</Alert>);

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly a dismissable success alert', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Alert dismissable onDismiss={jest.fn()} type="success">lorem</Alert>);

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
