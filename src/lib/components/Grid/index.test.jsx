import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Grid from './index';

describe('Grid', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Grid).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(<Grid>lorem</Grid>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with full width children', () => {
    const { asFragment } = render(
      <Grid full>
        <Grid.Cell>lorem</Grid.Cell>
        <Grid.Cell>ipsum</Grid.Cell>
      </Grid>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with wrapped children', () => {
    const { asFragment } = render(
      <Grid wrap>
        <Grid.Cell width={50}>lorem</Grid.Cell>
        <Grid.Cell width={66}>ipsum</Grid.Cell>
      </Grid>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with responsive props', () => {
    const { asFragment } = render(
      <Grid
        xsmall="fit"
        small="full"
        medium="fit"
        large="full"
        xlarge="fit"
        huge="full"
      >
        <Grid.Cell width={50}>lorem</Grid.Cell>
        <Grid.Cell width={50}>ipsum</Grid.Cell>
      </Grid>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly without gutters', () => {
    const { asFragment } = render(
      <Grid noGutter>
        <Grid.Cell width={50}>lorem</Grid.Cell>
        <Grid.Cell width={50}>ipsum</Grid.Cell>
      </Grid>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
