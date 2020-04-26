import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Item from './index';

describe('Card.Item', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Item).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Item>
        <p>lorem</p>
      </Item>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with a colour', () => {
    const { asFragment } = render(
      <Item type="success">
        <p>lorem</p>
      </Item>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
