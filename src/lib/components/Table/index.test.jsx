import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Table from './index';

describe('Table', () => {
  afterEach(cleanup);

  it('should be defined', () => {
    expect(Table).toBeDefined();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <Table>
        lorem ipsum dolor
      </Table>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a condensed table', () => {
    const { asFragment } = render(
      <Table condensed>
        <Table.Caption>Small table and text</Table.Caption>
        <Table.Header>
          <Table.Row head>
            <Table.HeaderCell>First name</Table.HeaderCell>
            <Table.HeaderCell>Last name</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Jim</Table.Cell>
            <Table.Cell>Kirk</Table.Cell>
            <Table.Cell>@captaink</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mr.</Table.Cell>
            <Table.Cell>Spock</Table.Cell>
            <Table.Cell>@science101</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Nyota</Table.Cell>
            <Table.Cell>Uhura</Table.Cell>
            <Table.Cell>@comms</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
