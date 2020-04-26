import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Code from './index';

describe('Code', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Code).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Code>
        lorem ipsum dolor
      </Code>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly a multi-line code snippet', () => {
    const { asFragment } = render(
      <Code multiline>
        lorem ipsum dolor
        sit amet
      </Code>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
