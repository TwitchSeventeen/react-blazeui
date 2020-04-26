import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Grid from './index';

describe('Grid', () => {
  it('should be defined', () => {
    expect(Grid).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Grid>lorem</Grid>);

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with full width children', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Grid full>
        <Grid.Cell>lorem</Grid.Cell>
        <Grid.Cell>ipsum</Grid.Cell>
      </Grid>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with wrapped children', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Grid wrap>
        <Grid.Cell width={50}>lorem</Grid.Cell>
        <Grid.Cell width={66}>ipsum</Grid.Cell>
      </Grid>,
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with responsive props', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
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

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without gutters', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Grid noGutter>
        <Grid.Cell width={50}>lorem</Grid.Cell>
        <Grid.Cell width={50}>ipsum</Grid.Cell>
      </Grid>,
    );
  });
});
