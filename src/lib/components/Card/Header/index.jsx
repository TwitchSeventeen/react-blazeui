import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Header(props) {
  const { children, className, ...other } = props;
  const classes = classNames('c-card__header', className);
  return (
    <header {...other} className={classes}>
      { children }
    </header>
  );
}

Header.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
};

Header.defaultProps = {
  children: null,
  className: null,
};

export default Header;
