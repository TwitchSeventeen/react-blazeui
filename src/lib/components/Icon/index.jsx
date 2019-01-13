import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Icon(props) {
  const {
    className, name, type, size, flipped, rotate, spin, pulse, ...other
  } = props;
  const classes = classNames(
    'c-icon',
    { [`fa-${size}`]: size },
    { [`fa-flip-${flipped}`]: flipped },
    { [`fa-rotate-${rotate}`]: rotate },
    { [`fa-${name}`]: name },
    { [type]: type },
    { 'fa-spin': spin },
    { 'fa-pulse': pulse },
    className,
  );

  return (
    <i {...other} className={classes} aria-hidden />
  );
}

Icon.propTypes = {
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Name of the icon
   */
  name: PropTypes.string.isRequired,
  /**
   * Icon set to use
   */
  type: PropTypes.string,
  /**
   * Flips the icon
   */
  flipped: PropTypes.oneOf([
    'horizontal',
    'vertical',
  ]),
  /**
   * Rotates the icon
   */
  rotate: PropTypes.oneOf([
    90,
    180,
    270,
  ]),
  /**
   * Icon set to use
   */
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'lg',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
  ]),
  /**
   * Spins the Icon
   */
  spin: PropTypes.bool,
  /**
   * Spins the Icon with 8 steps
   */
  pulse: PropTypes.bool,
};

Icon.defaultProps = {
  className: null,
  size: null,
  type: 'fas',
  flipped: null,
  rotate: null,
  spin: false,
  pulse: false,
};

export default Icon;
