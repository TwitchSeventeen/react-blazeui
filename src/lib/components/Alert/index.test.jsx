import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Alert from './index';

describe('Alert', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Alert).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Alert>lorem</Alert>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly a dismissable success alert', () => {
    const { asFragment } = render(
      <Alert
        dismissable
        onDismiss={jest.fn()}
        type="success"
      >
        lorem
      </Alert>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
