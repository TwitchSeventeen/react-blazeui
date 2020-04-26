import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Key from './index';

describe('Key', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Key).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Key>
        key
      </Key>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
