import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from './index';

describe('Header', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Header>
        lorem ipsum dolor
      </Header>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
