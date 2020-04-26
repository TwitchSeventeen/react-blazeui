import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Quiet from './index';

describe('Quiet', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Quiet).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Quiet>
        lorem ipsum dolor
      </Quiet>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
