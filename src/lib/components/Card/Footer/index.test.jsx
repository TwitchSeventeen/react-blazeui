import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from './index';

describe('Card.Footer', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Footer>
        lorem
      </Footer>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly as a block', () => {
    const { asFragment } = render(
      <Footer block>
        lorem
      </Footer>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
