import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Code from './index';

describe('Code', () => {
  it('should be defined', () => {
    expect(Code).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Code>
        lorem ipsum dolor
      </Code>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly a multi-line code snippet', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Code multiline>
        lorem ipsum dolor
        sit amet
      </Code>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
