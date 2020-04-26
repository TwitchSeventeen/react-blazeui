import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Body from './index';

describe('Card.Body', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Body).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Body>
        <p>lorem</p>
      </Body>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
