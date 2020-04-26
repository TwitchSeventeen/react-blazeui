import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from '../index';

describe('Select', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Input.Select).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Input.Select>
        <option>Choose me...</option>
      </Input.Select>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
