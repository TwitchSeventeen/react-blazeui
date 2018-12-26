import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Select (props) {
  const { children, className, success, error } = props;
  const classes = classNames(
      'c-field',
      { 'c-field--success': success },
      { 'c-field--error': error },
      className
  );

  return (
      <select {...props} className={classes}>
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
};

Select.defaultProps = {
  children: null,
  className: null,
};

export default Select;
