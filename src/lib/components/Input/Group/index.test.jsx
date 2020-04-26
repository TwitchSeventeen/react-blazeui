import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Group from './index';

describe('Field.Group', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Group).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Group>
        lorem ipsum dolor
      </Group>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
