import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Container from './index';

describe('Container', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Container).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Container>
        lorem ipsum dolor
      </Container>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly a large container', () => {
    const { asFragment } = render(
      <Container size="large">
        lorem ipsum dolor
        sit amet
      </Container>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
