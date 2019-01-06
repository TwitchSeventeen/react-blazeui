import React from 'react';
import PropTypes from 'prop-types';

function Mono(props) {
  const { children } = props;
  return (
    <span className="u-text--mono">
      { children }
    </span>
  );
}

Mono.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
};

Mono.defaultProps = {
  children: null,
};

export default Mono;
