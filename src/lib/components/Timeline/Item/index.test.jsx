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
      <Item>
        lorem ipsum dolor
      </Item>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly as the last item', () => {
    const { asFragment } = render(
      <Item last>
        lorem ipsum dolor
      </Item>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with success styling', () => {
    const { asFragment } = render(
      <Item type="success">
        lorem ipsum dolor
      </Item>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with loading styling', () => {
    const { asFragment } = render(
      <Item loading>
        lorem ipsum dolor
      </Item>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with left styling', () => {
    const { asFragment } = render(
      <Item left>
        lorem ipsum dolor
      </Item>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
