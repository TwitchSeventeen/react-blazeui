import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from './index';

describe('List', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(List).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <List>
        <List.Item>lorem</List.Item>
        <List.Item>ipsum</List.Item>
        <List.Item>dolor</List.Item>
      </List>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly an ordered list', () => {
    const { asFragment } = render(
      <List ordered>
        <List.Item>lorem</List.Item>
        <List.Item>ipsum</List.Item>
        <List.Item>dolor</List.Item>
      </List>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly an unstyled list', () => {
    const { asFragment } = render(
      <List unstyled>
        <List.Item>lorem</List.Item>
        <List.Item>ipsum</List.Item>
        <List.Item>dolor</List.Item>
      </List>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly an inline list', () => {
    const { asFragment } = render(
      <List inline>
        <List.Item>lorem</List.Item>
        <List.Item>ipsum</List.Item>
        <List.Item>dolor</List.Item>
      </List>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
