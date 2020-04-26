import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Header(props) {
  const {
    children, className, dataName, ...other
  } = props;
  const classes = classNames('c-card__header', className);
  return (
    <header
      {...other}
      className={classes}
      data-name={dataName}
    >
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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Header.defaultProps = {
  children: null,
  className: null,
  dataName: 'card-header',
};

export default Header;
