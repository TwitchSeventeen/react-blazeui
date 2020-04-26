import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './index';

describe('Card.Header', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Header).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Header>
        lorem
      </Header>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
