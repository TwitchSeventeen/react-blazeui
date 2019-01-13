import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from './index';

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Button>
          lorem ipsum dolor
      </Button>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly a ghost button', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Button ghost>
          lorem ipsum dolor
      </Button>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly a ghost button with a type', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Button ghost type="success">
          lorem ipsum dolor
      </Button>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly a button with a type', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Button type="success">
          lorem ipsum dolor
      </Button>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
