import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Avatar from './index';

describe('Avatar', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Avatar).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Avatar
        alt="placeholder"
        src="http://placehold.it/1024x963/3B6DC6/FFF"
        size="super"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with two images', () => {
    const { asFragment } = render(
      <Avatar
        alt="placeholder"
        src="http://placehold.it/1024x963/3B6DC6/FFF"
        alt2="placeholder"
        src2="http://placehold.it/1024x963/BADA55/FFF"
        size="super"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with initials', () => {
    const { asFragment } = render(
      <Avatar initials="LKO" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
