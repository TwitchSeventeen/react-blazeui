import React from 'react';
import PropTypes from 'prop-types';

function Key(props) {
  const { children } = props;
  return (
    <kbd className="u-kbd">
      { children }
    </kbd>
  );
}

Key.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
};

Key.defaultProps = {
  children: null,
};

export default Key;
