import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loud from './index';

describe('Loud', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Loud).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Loud>
        lorem ipsum dolor
      </Loud>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
