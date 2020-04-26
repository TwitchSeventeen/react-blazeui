import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Counter from './index';

describe('Counter', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Counter).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Counter start={100} value={0} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with prefix and suffix', () => {
    const { asFragment } = render(
      <Counter start={100} value={0} prefix="£" suffix=" lorem" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
