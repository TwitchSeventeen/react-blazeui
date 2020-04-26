import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Code(props) {
  const {
    children, multiline, className, dataName, ...other
  } = props;
  const classes = classNames('u-code', { 'u-code--multiline': multiline }, className);
  return (
    <code
      {...other}
      className={classes}
      data-name={dataName}
    >
      { children }
    </code>
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
};

Code.defaultProps = {
  children: null,
  multiline: false,
  className: null,
  dataName: 'code',
};

export default Code;
