import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Mono(props) {
  const {
    children, className, as: Component, dataName, ...other
  } = props;
  const classes = classNames('u-text--mono', className);
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

Mono.propTypes = {
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

Mono.defaultProps = {
  children: null,
  className: null,
  dataName: 'mono',
  as: 'span',
};

export default Mono;
