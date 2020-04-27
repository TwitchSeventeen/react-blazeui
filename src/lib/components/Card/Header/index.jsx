import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Header(props) {
  const {
    children, className, dataName, as: Component, ...other
  } = props;
  const classes = classNames('c-card__header', className);
  return (
    <Component
      {...other}
      className={classes}
      data-name={dataName}
    >
      { children }
    </Component>
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
  /**
   * Element type to render as
   */
  as: PropTypes.elementType,
};

Header.defaultProps = {
  children: null,
  className: null,
  dataName: 'card-header',
  as: 'header',
};

export default Header;
