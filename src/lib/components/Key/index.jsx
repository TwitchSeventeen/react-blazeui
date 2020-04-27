import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Key(props) {
  const {
    children, className, dataName, as: Component, ...other
  } = props;
  const classes = classNames('u-kbd', className);
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

Key.propTypes = {
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

Key.defaultProps = {
  children: null,
  className: null,
  dataName: 'key',
  as: 'kbd',
};

export default Key;
