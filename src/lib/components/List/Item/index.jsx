import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Item(props) {
  const {
    children, className, unstyled, dataName, ...other
  } = props;
  const classes = classNames(
    'c-list__item',
    { 'c-list__item--unstyled': unstyled },
    className,
  );

  return (
    <li
      {...other}
      className={classes}
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
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Defines an unstyled list
   */
  unstyled: PropTypes.bool,
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Item.defaultProps = {
  children: null,
  className: null,
  unstyled: false,
  dataName: 'list-item',
};

export default Item;
