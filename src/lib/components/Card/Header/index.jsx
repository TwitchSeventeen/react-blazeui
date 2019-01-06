import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { children } = props;
  return (
    <header className="c-card__header">
      { children }
    </header>
  );
}

Header.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
