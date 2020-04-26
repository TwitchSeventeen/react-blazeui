import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Row from './index';

describe('Row', () => {
  it('should be defined', () => {
    expect(Row).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Row>
        lorem ipsum dolor
      </Row>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
