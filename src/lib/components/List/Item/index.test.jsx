import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Item from './index';

describe('Item', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Item).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Item>ipsum</Item>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly an unstyled Item', () => {
    const { asFragment } = render(
      <Item unstyled>ipsum</Item>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
