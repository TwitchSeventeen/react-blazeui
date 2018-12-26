import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Textarea from './Textarea';
import Select from './Select';

function Input (props) {
  const { className, success, error } = props;
  const classes = classNames(
      'c-field',
      { 'c-field--success': success },
      { 'c-field--error': error },
      className
  );

  return (
      <input {...props} className={classes} />
  );
}

Input.propTypes = {
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   *
   */
  type: PropTypes.string,
  /**
   * Defines successful styling
   */
  success: PropTypes.bool,
  /**
   * Defines error styling
   */
  error: PropTypes.bool,
};

Input.defaultProps = {
  className: null,
  success: false,
  error: false,
  type: 'text',
};

Input.Textarea = Textarea;
Input.Select = Select;

export default Input;
