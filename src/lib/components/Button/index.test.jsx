import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Button>
        lorem ipsum dolor
      </Button>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly a ghost button', () => {
    const { asFragment } = render(
      <Button ghost>
        lorem ipsum dolor
      </Button>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly a ghost button with a type', () => {
    const { asFragment } = render(
      <Button ghost type="success">
        lorem ipsum dolor
      </Button>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly a button with a type', () => {
    const { asFragment } = render(
      <Button type="success">
        lorem ipsum dolor
      </Button>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
