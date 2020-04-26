import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from '../index';

describe('Checkbox', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Input.Checkbox).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Input.Label choice>
        <Input.Checkbox />
        {' '}
        Tick the box
      </Input.Label>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
