import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Item(props) {
  const { children, type, className } = props;
  const classes = classNames('c-card__item', { [`c-card__item--${type}`]: type }, className);
  return (
    <div className={classes}>
      { children }
    </div>
  );
}

Item.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
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
};

Item.defaultProps = {
  children: null,
  type: null,
  className: null,
};

export default Item;
