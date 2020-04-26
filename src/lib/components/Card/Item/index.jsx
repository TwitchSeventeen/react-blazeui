import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Item(props) {
  const {
    children, type, className, dataName, ...other
  } = props;
  const classes = classNames('c-card__item', { [`c-card__item--${type}`]: type }, className);
  return (
    <div
      {...other}
      className={classes}
      data-name={dataName}
    >
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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Item.defaultProps = {
  children: null,
  type: null,
  className: null,
  dataName: 'card-item',
};

export default Item;
