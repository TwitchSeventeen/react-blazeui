import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Mono(props) {
  const { children, className, ...other } = props;
  const classes = classNames('u-text--mono', className);
  return (
    <span {...other} className={classes}>
      { children }
    </span>
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
};

Mono.defaultProps = {
  children: null,
  className: null,
};

export default Mono;
