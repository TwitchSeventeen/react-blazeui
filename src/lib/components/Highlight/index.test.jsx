import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Highlight from './index';

describe('Highlight', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Highlight).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Highlight>
        lorem ipsum dolor
      </Highlight>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
