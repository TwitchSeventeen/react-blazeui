import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Select(props) {
  const {
    children, className, success, error, dataName, ...other
  } = props;
  const classes = classNames(
    'c-field',
    { 'c-field--success': success },
    { 'c-field--error': error },
    className,
  );

  return (
    <select
      {...other}
      className={classes}
      data-name={dataName}
    >
      { children }
    </select>
  );
}

Select.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Defines successful styling
   */
  success: PropTypes.bool,
  /**
   * Defines error styling
   */
  error: PropTypes.bool,
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Select.defaultProps = {
  children: null,
  className: null,
  success: false,
  error: false,
  dataName: 'input-select',
};

export default Select;
