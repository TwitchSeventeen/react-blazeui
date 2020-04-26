import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Item from './index';

describe('Breadcrumbs.Item', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Item).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Item>
        <a href="/lorem">lorem</a>
      </Item>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly an active Item', () => {
    const { asFragment } = render(
      <Item active>
        lorem
      </Item>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
