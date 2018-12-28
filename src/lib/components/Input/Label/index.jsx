import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Label (props) {
  const { className, choice, children } = props;
  const classes = classNames(
      'c-field',
      { 'c-field--choice': choice },
      { 'c-field': choice },
      className
  );

  return (
      <label {...props} className={classes}>
        { children }
      </label>
  );
}

Label.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
};

Label.defaultProps = {
  children: null,
  className: null,
};

export default Label;
