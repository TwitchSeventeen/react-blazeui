import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from './index';

describe('Card', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Card).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Card>
        <p>lorem</p>
      </Card>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
