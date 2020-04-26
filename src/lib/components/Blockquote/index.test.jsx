import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Blockquote from './index';

describe('Blockquote', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Blockquote).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Blockquote cite="~ Greg">
        lorem ipsum dolor
      </Blockquote>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly without a footer', () => {
    const { asFragment } = render(
      <Blockquote>
        lorem ipsum dolor
      </Blockquote>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
