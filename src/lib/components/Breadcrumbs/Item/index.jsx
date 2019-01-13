import React from 'react';
import PropTypes from 'prop-types';
import omitOwnProps from '../../../utils/omitOwnProps';

function Item(props) {
  const { children, active } = props;
  const spreadProps = omitOwnProps(props);
  return (
    <li
      {...spreadProps}
      className="c-breadcrumbs__crumb"
      aria-current={active ? 'page' : null}
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
};

Item.defaultProps = {
  children: null,
  active: false,
};

export default Item;
