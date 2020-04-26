import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Quiet(props) {
  const {
    children, className, dataName, ...other
  } = props;
  const classes = classNames('u-text--quiet', className);
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

Quiet.propTypes = {
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

Quiet.defaultProps = {
  children: null,
  className: null,
  dataName: 'quiet',
};

export default Quiet;
