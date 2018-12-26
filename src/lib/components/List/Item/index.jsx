import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Item (props) {
  const { children, className, unstyled } = props;
  const classes = classNames(
      'c-list__item',
      { 'c-list__item--unstyled': unstyled },
      className
  );

  return (
      <li {...props} className={classes}>
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
};

Item.defaultProps = {
  children: null,
  className: null,
  unstyled: false,
};

export default Item;