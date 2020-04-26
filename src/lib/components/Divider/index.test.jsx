import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Divider from './index';

describe('Code', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Divider).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Divider>
        lorem ipsum dolor
      </Divider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly a dashed divider', () => {
    const { asFragment } = render(
      <Divider type="dashed">
        lorem ipsum dolor
      </Divider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
