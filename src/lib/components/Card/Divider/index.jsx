import React from 'react';
import PropTypes from 'prop-types';

function Divider (props) {
  const { children } = props;
  return (
      <div role="separator" className="c-card__item c-card__item--divider">
        { children }
      </div>
  );
}

Divider.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
};

Divider.defaultProps = {
  children: null,
};

export default Divider;