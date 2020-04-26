import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Textarea from './Textarea';
import Select from './Select';
import Field from './Field';
import Group from './Group';
import Checkbox from './Checkbox';
import Label from './Label';

function Input(props) {
  const {
    className, success, error, size, dataName, ...other
  } = props;
  const classes = classNames(
    'c-field',
    { 'c-field--success': success },
    { 'c-field--error': error },
    { [`u-${size}`]: size },
    className,
  );

  return (
    <input
      {...other}
      className={classes}
      data-name={dataName}
    />
  );
}

Input.propTypes = {
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * The type of input
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
  /**
   * Size of the input
   */
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'super',
  ]),
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Input.defaultProps = {
  className: null,
  success: false,
  error: false,
  type: 'text',
  size: null,
  dataName: 'input',
};

Input.Textarea = Textarea;
Input.Select = Select;
Input.Field = Field;
Input.Group = Group;
Input.Checkbox = Checkbox;
Input.Label = Label;

export default Input;
