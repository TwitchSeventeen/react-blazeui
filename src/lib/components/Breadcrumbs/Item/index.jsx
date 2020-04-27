import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Item(props) {
  const {
    children, active, className, dataName, as: Component, ...other
  } = props;
  const classes = classNames('c-breadcrumbs__crumb', className);
  return (
    <Component
      {...other}
      className={classes}
      aria-current={active ? 'page' : null}
      data-name={dataName}
    >
      { children }
    </Component>
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
  /**
   * Element type to render as
   */
  as: PropTypes.elementType,
};

Item.defaultProps = {
  children: null,
  active: false,
  className: null,
  dataName: 'breadcrumbs-item',
  as: 'li',
};

export default Item;
