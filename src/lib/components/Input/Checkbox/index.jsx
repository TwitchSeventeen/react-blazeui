import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Checkbox(props) {
  const {
    className, success, error, radio, ...other
  } = props;
  const classes = classNames(
    { 'c-field--success': success },
    { 'c-field--error': error },
    className,
  );

  if (radio) {
    return (
      <input {...other} className={classes} type="radio" />
    );
  }

  return (
    <input {...other} className={classes} type="checkbox" />
  );
}

Checkbox.propTypes = {
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
   * Defines a radio input
   */
  radio: PropTypes.bool,
};

Checkbox.defaultProps = {
  className: null,
  success: false,
  error: false,
  radio: false,
};

export default Checkbox;
