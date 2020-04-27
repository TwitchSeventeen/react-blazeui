import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Timeline from './index';

describe('Timeline', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Timeline).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Timeline>
        <Timeline.Item>
          lorem ipsum dolor
        </Timeline.Item>
      </Timeline>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with a loading item', () => {
    const { asFragment } = render(
      <Timeline loading>
        <Timeline.Item>
          lorem ipsum dolor
        </Timeline.Item>
        <Timeline.Item loading>
          lorem ipsum dolor
        </Timeline.Item>
      </Timeline>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with left Items', () => {
    const { asFragment } = render(
      <Timeline alternate>
        <Timeline.Item>
          lorem ipsum dolor
        </Timeline.Item>
        <Timeline.Item left>
          lorem ipsum dolor
        </Timeline.Item>
      </Timeline>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
