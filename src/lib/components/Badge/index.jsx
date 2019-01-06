import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Badge(props) {
  const {
    children, type, rounded, ghost,
  } = props;
  const classes = classNames(
    'c-badge',
    { [`c-badge--${type}`]: type },
    { 'c-badge--rounded': rounded },
    { 'c-badge--ghost': ghost },
  );

  return (
    <span className={classes}>
      { children }
    </span>
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
};

Badge.defaultProps = {
  children: null,
  rounded: false,
  ghost: false,
  type: null,
};

export default Badge;
