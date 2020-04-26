import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Icon from './index';

describe('Icon', () => {
  it('should be defined', () => {
    expect(Icon).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Icon name="spinner" />,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
