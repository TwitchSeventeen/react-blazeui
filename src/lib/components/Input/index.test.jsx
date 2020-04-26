import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from './index';

describe('Input', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Input).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Input placeholder="Type in here..." name="type" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
