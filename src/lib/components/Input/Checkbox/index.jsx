import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Checkbox (props) {
  const { className, success, error, radio } = props;
  const classes = classNames(
      { 'c-field--success': success },
      { 'c-field--error': error },
      className
  );

  if(radio) {
    return (
        <input {...props} className={classes} type="radio" />
    )
  }

  return (
      <input {...props} className={classes} type="checkbox" />
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
};

export default Checkbox;
