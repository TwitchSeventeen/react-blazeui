import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Header(props) {
  const {
    children, className, ...other
  } = props;

  const classes = classNames(
    'c-table__head',
    className,
  );

  return (
    <thead className={classes} {...other}>
      { children }
    </thead>
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
  className: null,
  children: null,
};

export default Header;
