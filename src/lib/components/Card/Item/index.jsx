import React from 'react';
import PropTypes from 'prop-types';

function Item (props) {
  const { children } = props;
  return (
      <div className="c-card__item">
        { children }
      </div>
  );
}

Item.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
};

Item.defaultProps = {
  children: null,
};

export default Item;