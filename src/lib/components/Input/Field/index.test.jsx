import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Field from './index';

describe('Field', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Field).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Field>
        lorem ipsum dolor
      </Field>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
