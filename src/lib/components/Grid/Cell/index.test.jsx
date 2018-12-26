import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Cell from './index';
import Grid from '../index';

describe('Cell', () => {
  it('should be defined', () => {
    expect(Cell).toBeDefined();
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Cell>lorem</Cell>);

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with correct alignment', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
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
        </Grid>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with responsive props', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
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
        </Grid>
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without gutters', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
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
        </Grid>
    );
  });
});