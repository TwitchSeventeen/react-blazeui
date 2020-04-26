import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Mono(props) {
  const {
    children, className, dataName, ...other
  } = props;
  const classes = classNames('u-text--mono', className);
  return (
    <span
      {...other}
      className={classes}
      data-name={dataName}
    >
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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Mono.defaultProps = {
  children: null,
  className: null,
  dataName: 'mono',
};

export default Mono;
