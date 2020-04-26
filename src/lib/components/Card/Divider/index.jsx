import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Divider(props) {
  const {
    children, type, separator, className, dataName, ...other
  } = props;

  const classes = classNames('c-card__item', 'c-card__item--divider', { [`c-card__item--${type}`]: type }, className);
  const separatorClasses = classNames('c-card__divider', className);

  if (separator) {
    return (
      <div
        role="separator"
        className={separatorClasses}
        data-name={dataName}
      />
    );
  }

  return (
    <div
      {...other}
      role={type ? null : 'separator'}
      className={classes}
      data-name={dataName}
    >
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
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Divider.defaultProps = {
  children: null,
  type: null,
  separator: false,
  className: null,
  dataName: 'card-divider',
};

export default Divider;
