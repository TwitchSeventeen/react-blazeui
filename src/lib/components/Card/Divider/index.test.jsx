import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Divider from './index';

describe('Card.Divider', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Divider).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Divider>
        lorem
      </Divider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with a colour', () => {
    const { asFragment } = render(
      <Divider type="brand">
        lorem
      </Divider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly as a separator', () => {
    const { asFragment } = render(
      <Divider separator />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
