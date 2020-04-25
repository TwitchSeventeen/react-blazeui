import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Abbr from './index';

describe('Abbr', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Abbr).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
        <Abbr title="Help text">
          lorem ipsum dolor
        </Abbr>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
