import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Textarea(props) {
  const {
    children, className, success, error,
  } = props;
  const classes = classNames(
    'c-field',
    { 'c-field--success': success },
    { 'c-field--error': error },
    className,
  );

  return (
    <textarea {...props} className={classes}>
      { children }
    </textarea>
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
};

Textarea.defaultProps = {
  children: null,
  className: null,
  success: false,
  error: false,
};

export default Textarea;
