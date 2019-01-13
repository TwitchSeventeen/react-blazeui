import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Divider(props) {
  const {
    children, type, separator, ...other
  } = props;
  const classes = classNames('c-card__item', 'c-card__item--divider', { [`c-card__item--${type}`]: type });

  if (separator) {
    return (
      <div role="separator" className="c-card__divider" />
    );
  }

  return (
    <div {...other} role={type ? null : 'separator'} className={classes}>
      { children }
    </div>
  );
}

Divider.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * The card colouring
   */
  type: PropTypes.oneOf([
    'brand',
    'info',
    'warning',
    'success',
    'error',
  ]),
  /**
   * Creates a horizontal line
   */
  separator: PropTypes.bool,
};

Divider.defaultProps = {
  children: null,
  type: null,
  separator: false,
};

export default Divider;
