import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Row(props) {
  const {
    children, as: Component, className, head, disabled, clickable, dataName, ...other
  } = props;

  const classes = classNames(
    'c-table__row',
    { 'c-table__row--heading': head },
    { 'c-table__row--disabled': disabled },
    { 'c-table__row--clickable': clickable },
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

Row.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Defines this row is a heading
   */
  head: PropTypes.bool,
  /**
   * Defines a disabled row
   */
  disabled: PropTypes.bool,
  /**
   * Defines a clickable row
   */
  clickable: PropTypes.bool,
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

Row.defaultProps = {
  className: null,
  children: null,
  head: false,
  disabled: false,
  clickable: false,
  dataName: 'table-row',
  as: 'tr',
};

export default Row;
