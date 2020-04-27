import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Cell(props) {
  const {
    children, className, dataName, ...other
  } = props;

  const classes = classNames(
    'c-table__cell',
    className,
  );

  return (
    <td
      className={classes}
      {...other}
      data-name={dataName}
    >
      { children }
    </td>
  );
}

Cell.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Cell.defaultProps = {
  className: null,
  children: null,
  dataName: 'table-cell',
};

export default Cell;
