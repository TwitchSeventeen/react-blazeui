import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Textarea(props) {
  const {
    children, className, success, error, as: Component, dataName, ...other
  } = props;
  const classes = classNames(
    'c-field',
    { 'c-field--success': success },
    { 'c-field--error': error },
    className,
  );

  return (
    <Component
      {...other}
      className={classes}
      data-name={dataName}
    >
      { children }
    </Component>
  );
}

Textarea.propTypes = {
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
  /**
   * Element type to render as
   */
  as: PropTypes.elementType,
};

Textarea.defaultProps = {
  children: null,
  className: null,
  success: false,
  error: false,
  dataName: 'input-textarea',
  as: 'textarea',
};

export default Textarea;
