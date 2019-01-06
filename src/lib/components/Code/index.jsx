import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Code(props) {
  const { children, multiline } = props;
  const classes = classNames('u-code', { 'u-code--multiline': multiline });
  return (
    <code className={classes}>
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
};

Code.defaultProps = {
  children: null,
  multiline: false,
};

export default Code;
