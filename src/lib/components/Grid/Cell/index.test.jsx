import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Cell from './index';
import Grid from '../index';

describe('Cell', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Cell).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(<Cell>lorem</Cell>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with correct alignment', () => {
    const { asFragment } = render(
      <Grid className="demo">
        <Grid.Cell align="top">
          <div className="text">first</div>
        </Grid.Cell>
        <Grid.Cell align="center">
          <div className="text">second</div>
        </Grid.Cell>
        <Grid.Cell align="bottom">
          <div className="text">third</div>
        </Grid.Cell>
        <Grid.Cell>
          <div className="text">
            fourth
            <br />
            fourth
            <br />
            fourth
            <br />
            fourth
            <br />
            fourth
            <br />
          </div>
        </Grid.Cell>
      </Grid>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with responsive props', () => {
    const { asFragment } = render(
      <Grid wrap className="demo">
        <Grid.Cell width={100} small={33}>
          <div className="text">small</div>
        </Grid.Cell>
        <Grid.Cell width={100} medium={33}>
          <div className="text">medium</div>
        </Grid.Cell>
        <Grid.Cell width={100} large={33}>
          <div className="text">large</div>
        </Grid.Cell>
      </Grid>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly without gutters', () => {
    const { asFragment } = render(
      <Grid className="demo">
        <Grid.Cell>
          <div className="text">first</div>
        </Grid.Cell>
        <Grid.Cell>
          <div className="text">second</div>
        </Grid.Cell>
        <Grid.Cell noGutter>
          <div className="text">third</div>
        </Grid.Cell>
      </Grid>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
