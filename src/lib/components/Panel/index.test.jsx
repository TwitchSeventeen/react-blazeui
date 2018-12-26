import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Panel from './index';

describe('Panel', () => {
  it('should be defined', () => {
    expect(Panel).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Panel style={{ height: '200px'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate harum iure molestias nihil quasi? Delectus impedit minus molestiae, possimus provident quidem vero. Ab dignissimos reprehenderit voluptatem. Assumenda commodi explicabo ullam!
        </Panel>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
