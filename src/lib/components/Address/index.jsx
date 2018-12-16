import React from 'react';
import PropTypes from 'prop-types';

function Address (props) {
  const { children } = props;
  return (
      <address className="c-address">
        { children }
      </address>
  );
}

Address.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
};

Address.defaultProps = {
  children: null,
};

export default Address;