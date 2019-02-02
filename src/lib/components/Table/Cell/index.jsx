import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Cell(props) {
  const {
    children, className, ...other
  } = props;

  const classes = classNames(
    'c-table__cell',
    className,
  );

  return (
    <td className={classes} {...other}>
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
};

Cell.defaultProps = {
  className: null,
  children: null,
};

export default Cell;
