import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Badge from './index';

describe('Badge', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Badge).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Badge>lorem</Badge>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with a type', () => {
    const { asFragment } = render(
      <Badge type="success">lorem</Badge>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with rounded corners', () => {
    const { asFragment } = render(
      <Badge type="error" rounded>lorem</Badge>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly a ghost button', () => {
    const { asFragment } = render(
      <Badge ghost>lorem</Badge>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
