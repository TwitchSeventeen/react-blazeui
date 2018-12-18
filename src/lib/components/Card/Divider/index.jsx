import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Divider (props) {
  const { children, type } = props;
  const classes = classNames('c-card__item', 'c-card__item--divider', { [`c-card__item--${type}`]: type });
  return (
      <div role={type ? null : 'separator'} className={classes}>
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
  ])
};

Divider.defaultProps = {
  children: null,
  type: null,
};

export default Divider;