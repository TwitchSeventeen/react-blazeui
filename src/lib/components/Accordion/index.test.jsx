import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Accordion from './index';

describe('Accordion', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Accordion).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Accordion>
        lorem ipsum dolor
      </Accordion>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
