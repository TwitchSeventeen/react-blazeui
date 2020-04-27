import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Address(props) {
  const {
    children, className, as: Component, dataName, ...other
  } = props;
  const classes = classNames('c-address', className);
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

Address.propTypes = {
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

Address.defaultProps = {
  children: null,
  className: null,
  dataName: 'address',
  as: 'address',
};

export default Address;
