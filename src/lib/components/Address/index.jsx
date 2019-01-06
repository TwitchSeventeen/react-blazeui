import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Address(props) {
  const { children, className } = props;
  const classes = classNames('c-address', className);
  return (
    <address {...props} className={classes}>
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
};

Address.defaultProps = {
  children: null,
  className: null,
};

export default Address;
