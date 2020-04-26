import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Image from './index';

describe('Image', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Image).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Image
        height={100}
        width={50}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly without a width', () => {
    const { asFragment } = render(
      <Image
        height={100}
        filter="lorem"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with dimensions and a filter', () => {
    const { asFragment } = render(
      <Image
        height={100}
        width={50}
        filter="lorem"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with a picture liked by a user', () => {
    const { asFragment } = render(
      <Image
        user="twitchseventeen"
        filter="lorem"
        likes
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with a explicit picture', () => {
    const { asFragment } = render(
      <Image
        src="https://via.placeholder.com/150"
        alt="alt text"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
