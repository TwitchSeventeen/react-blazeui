import React from 'react';
import PropTypes from 'prop-types';

function Loud (props) {
  const { children } = props;
  return (
      <span className="u-text--loud">
        { children }
      </span>
  );
}

Loud.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
};

Loud.defaultProps = {
  children: null,
};

export default Loud;