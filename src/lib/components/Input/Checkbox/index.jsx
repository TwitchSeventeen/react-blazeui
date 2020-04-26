import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Checkbox(props) {
  const {
    className, success, error, radio, dataName, ...other
  } = props;
  const classes = classNames(
    { 'c-field--success': success },
    { 'c-field--error': error },
    className,
  );

  if (radio) {
    return (
      <input
        {...other}
        className={classes}
        type="radio"
        data-name={dataName}
      />
    );
  }

  return (
    <input
      {...other}
      className={classes}
      type="checkbox"
      data-name={dataName}
    />
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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Checkbox.defaultProps = {
  className: null,
  success: false,
  error: false,
  radio: false,
  dataName: 'input-checkbox',
};

export default Checkbox;
