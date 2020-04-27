import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Header(props) {
  const {
    children, className, dataName, ...other
  } = props;

  const classes = classNames(
    'c-table__head',
    className,
  );

  return (
    <thead
      className={classes}
      {...other}
      data-name={dataName}
    >
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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Header.defaultProps = {
  className: null,
  children: null,
  dataName: 'table-header',
};

export default Header;
