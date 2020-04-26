import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Panel from './index';

describe('Panel', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Panel).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Panel style={{ height: '200px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate harum iure molestias
        nihil quasi? Delectus impedit minus molestiae, possimus provident quidem vero. Ab
        dignissimos reprehenderit voluptatem. Assumenda commodi explicabo ullam!
      </Panel>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
