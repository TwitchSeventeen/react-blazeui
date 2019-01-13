import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omitOwnProps from '../../utils/omitOwnProps';

function Address(props) {
  const { children, className } = props;
  const classes = classNames('c-address', className);
  const spreadProps = omitOwnProps(props);
  return (
    <address {...spreadProps} className={classes}>
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
