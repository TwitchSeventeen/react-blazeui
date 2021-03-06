import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Group from '../Input/Group';

function Button(props) {
  const {
    children,
    className,
    buttonType,
    as: Component,
    type,
    size,
    fluid,
    ghost,
    rounded,
    active,
    dataName,
    ...other
  } = props;
  const classes = classNames(
    'c-button',
    { [`c-button--${type}`]: (type && !ghost) },
    { 'c-button--ghost': (!type && ghost) },
    { [`c-button--ghost-${type}`]: (type && ghost) },
    { 'c-button--block': fluid },
    { 'c-button--rounded': rounded },
    { 'c-button--active': active },
    { [`u-${size}`]: size },
    className,
  );

  return (
    <Component
      {...other}
      type={buttonType}
      className={classes}
      data-name={dataName}
    >
      { children }
    </Component>
  );
}

Button.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * The type of HTML button
   */
  buttonType: PropTypes.oneOf([
    'button',
    'submit',
    'reset',
  ]),
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
   * The type of button
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
   * Defines a full width button
   */
  fluid: PropTypes.bool,
  /**
   * Defines a rounded button
   */
  rounded: PropTypes.bool,
  /**
   * Defines an active state
   */
  active: PropTypes.bool,
  /**
   * Defines an ghost state
   */
  ghost: PropTypes.bool,
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

Button.defaultProps = {
  children: null,
  buttonType: 'button',
  type: null,
  size: null,
  fluid: false,
  rounded: false,
  active: false,
  className: null,
  ghost: false,
  dataName: 'button',
  as: 'button',
};

Button.Group = Group;

export default Button;
