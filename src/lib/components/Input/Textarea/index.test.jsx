import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from '../index';

describe('Textarea', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Input.Textarea).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Input.Textarea placeholder="Type in here..." />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
