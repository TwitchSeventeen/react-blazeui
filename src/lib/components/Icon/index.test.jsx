import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Icon from './index';

describe('Icon', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Icon).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Icon name="spinner" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
