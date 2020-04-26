import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Address from './index';

describe('Address', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Address).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Address>
        10010 The Street,
        <br />
        {' '}
        Binary Town,
        <br />
        {' '}
        Offandon City,
      </Address>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
