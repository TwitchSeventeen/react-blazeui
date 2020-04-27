import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Caption from './Caption';
import Header from './Header';
import Row from './Row';
import Cell from './Cell';
import HeaderCell from './HeaderCell';
import Body from './Body';

function Table(props) {
  const {
    children, as: Component, className, striped, clickable, condensed, dataName, ...other
  } = props;

  const classes = classNames(
    'c-table',
    { 'c-table--striped': striped },
    { 'c-table--clickable': clickable },
    { 'c-table--condensed': condensed },
    className,
  );

  return (
    <Component
      className={classes}
      {...other}
      data-name={dataName}
    >
      { children }
    </Component>
  );
}

Table.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Defines a table with striped rows
   */
  striped: PropTypes.bool,
  /**
   * Defines a clickable table
   */
  clickable: PropTypes.bool,
  /**
   * Defines a condensed table
   */
  condensed: PropTypes.bool,
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
  /**
   * Element type to render as
   */
  as: PropTypes.elementType,
};

Table.defaultProps = {
  className: null,
  children: null,
  striped: false,
  clickable: false,
  condensed: false,
  dataName: 'table',
  as: 'table',
};

Table.Caption = Caption;
Table.Header = Header;
Table.Row = Row;
Table.Cell = Cell;
Table.HeaderCell = HeaderCell;
Table.Body = Body;

export default Table;
