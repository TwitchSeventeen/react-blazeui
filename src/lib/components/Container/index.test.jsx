import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Container from './index';

describe('Container', () => {
  it('should be defined', () => {
    expect(Container).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Container>
        lorem ipsum dolor
      </Container>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly a large container', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Container size="large">
        lorem ipsum dolor
        sit amet
      </Container>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
