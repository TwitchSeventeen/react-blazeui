import React from 'react';
import PropTypes from 'prop-types';

function Body(props) {
  const { children, ...other } = props;
  return (
    <div {...other} className="c-card__body">
      { children }
    </div>
  );
}

Body.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
};

Body.defaultProps = {
  children: null,
};

export default Body;
