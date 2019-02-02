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
    children, className, striped, clickable, condensed, ...other
  } = props;

  const classes = classNames(
    'c-table',
    { 'c-table--striped': striped },
    { 'c-table--clickable': clickable },
    { 'c-table--condensed': condensed },
    className,
  );

  return (
    <table className={classes} {...other}>
      { children }
    </table>
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
};

Table.defaultProps = {
  className: null,
  children: null,
  striped: false,
  clickable: false,
  condensed: false,
};

Table.Caption = Caption;
Table.Header = Header;
Table.Row = Row;
Table.Cell = Cell;
Table.HeaderCell = HeaderCell;
Table.Body = Body;

export default Table;
