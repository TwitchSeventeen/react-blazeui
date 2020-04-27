import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Code(props) {
  const {
    children, multiline, className, as: Component, dataName, ...other
  } = props;
  const classes = classNames('u-code', { 'u-code--multiline': multiline }, className);
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

Code.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Defines a multi-line code snippet
   */
  multiline: PropTypes.bool,
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

Code.defaultProps = {
  children: null,
  multiline: false,
  className: null,
  dataName: 'code',
  as: 'code',
};

export default Code;
