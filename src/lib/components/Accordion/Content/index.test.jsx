import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Content from './index';

describe('Content', () => {
  it('should be defined', () => {
    expect(Content).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Content>
          lorem ipsum dolor
        </Content>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});

