import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Group from './index';

describe('Field.Group', () => {
  it('should be defined', () => {
    expect(Group).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Group>
          lorem ipsum dolor
        </Group>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
