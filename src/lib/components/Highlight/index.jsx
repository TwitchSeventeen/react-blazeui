import React from 'react';
import PropTypes from 'prop-types';

function Highlight(props) {
  const { children, ...other } = props;
  return (
    <span {...other} className="u-text--highlight">
      { children }
    </span>
  );
}

Highlight.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
};

Highlight.defaultProps = {
  children: null,
};

export default Highlight;
