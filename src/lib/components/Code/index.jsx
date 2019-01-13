import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Code(props) {
  const {
    children, multiline, className, ...other
  } = props;
  const classes = classNames('u-code', { 'u-code--multiline': multiline }, className);
  return (
    <code {...other} className={classes}>
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
};

Code.defaultProps = {
  children: null,
  multiline: false,
  className: null,
};

export default Code;
