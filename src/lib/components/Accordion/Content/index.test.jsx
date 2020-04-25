import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Content from './index';

describe('Content', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Content).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
        <Content>
          lorem ipsum dolor
        </Content>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

