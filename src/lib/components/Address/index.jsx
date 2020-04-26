import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Address(props) {
  const {
    children, className, dataName, ...other
  } = props;
  const classes = classNames('c-address', className);
  return (
    <address
      {...other}
      className={classes}
      data-name={dataName}
    >
      { children }
    </address>
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
};

Address.defaultProps = {
  children: null,
  className: null,
  dataName: 'address',
};

export default Address;
