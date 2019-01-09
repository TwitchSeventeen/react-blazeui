import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Timeline from './index';

describe('Timeline', () => {
  it('should be defined', () => {
    expect(Timeline).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Timeline>
        <Timeline.Item>
            lorem ipsum dolor
        </Timeline.Item>
      </Timeline>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a loading item', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Timeline loading>
        <Timeline.Item>
            lorem ipsum dolor
        </Timeline.Item>
        <Timeline.Item loading>
            lorem ipsum dolor
        </Timeline.Item>
      </Timeline>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with left Items', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Timeline alternate>
        <Timeline.Item>
          lorem ipsum dolor
        </Timeline.Item>
        <Timeline.Item left>
          lorem ipsum dolor
        </Timeline.Item>
      </Timeline>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
