import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Item(props) {
  const {
    children, active, className, dataName, ...other
  } = props;
  const classes = classNames('c-breadcrumbs__crumb', className);
  return (
    <li
      {...other}
      className={classes}
      aria-current={active ? 'page' : null}
      data-name={dataName}
    >
      { children }
    </li>
  );
}

Item.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Whether or not this item is active
   */
  active: PropTypes.bool,
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

Item.defaultProps = {
  children: null,
  active: false,
  className: null,
  dataName: 'breadcrumbs-item',
};

export default Item;
