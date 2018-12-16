import React from 'react';
import PropTypes from 'prop-types';

function Abbr (props) {
  const { children, title } = props;
  return (
      <abbr
          className="u-text--help"
          title={title}
      >
        { children }
      </abbr>
  );
}

Abbr.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Title attribute for the abbreviation component
   */
  title: PropTypes.string.isRequired,
};

Abbr.defaultProps = {
  children: null,
};

export default Abbr;