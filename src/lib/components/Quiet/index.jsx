import React from 'react';
import PropTypes from 'prop-types';

function Quiet(props) {
  const { children, ...other } = props;
  return (
    <span {...other} className="u-text--quiet">
      { children }
    </span>
  );
}

Quiet.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
};

Quiet.defaultProps = {
  children: null,
};

export default Quiet;
