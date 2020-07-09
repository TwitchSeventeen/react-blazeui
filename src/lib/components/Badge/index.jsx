import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Badge(props) {
  const {
    children, type, className, rounded, as: Component, ghost, dataName, ...other
  } = props;
  const classes = classNames(
    'c-badge',
    { [`c-badge--${type}`]: type },
    { 'c-badge--rounded': rounded },
    { 'c-badge--ghost': ghost },
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

Badge.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * A badge with rounded corners
   */
  rounded: PropTypes.bool,
  /**
   * A badge without a filled body
   */
  ghost: PropTypes.bool,
  /**
   * The type of button
   */
  type: PropTypes.oneOf([
    'brand',
    'info',
    'warning',
    'success',
    'error',
  ]),
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
  /**
   * Element type to render as
   */
  as: PropTypes.elementType,
  /**
   * Additional classes
   */
  className: PropTypes.string,
};

Badge.defaultProps = {
  children: null,
  rounded: false,
  ghost: false,
  type: null,
  dataName: 'badge',
  as: 'span',
  className: null,
};

export default Badge;
