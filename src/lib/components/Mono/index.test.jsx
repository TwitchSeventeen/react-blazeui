import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Mono from './index';

describe('Mono', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Mono).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Mono>
        lorem ipsum dolor
      </Mono>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
