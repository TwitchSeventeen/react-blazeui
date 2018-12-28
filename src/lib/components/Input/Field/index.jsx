import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Field (props) {
  const { className, iconLeft, iconRight, children, fixed } = props;
  const classes = classNames(
      'o-field',
      { 'o-field--icon-left': iconLeft },
      { 'o-field--icon-right': iconRight },
      { 'o-field--fixed': fixed },
      className
  );

  return (
      <div {...props} className={classes}>
        { children }
      </div>
  );
}

Field.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Defines a left icon
   */
  iconLeft: PropTypes.bool,
  /**
   * Defines a right icon
   */
  iconRight: PropTypes.bool,
  /**
   * Defines a fixed with field
   */
  fixed: PropTypes.bool,
};

Field.defaultProps = {
  className: null,
  iconLeft: false,
  iconRight: false,
  children: null,
  fixed: false,
};

export default Field;