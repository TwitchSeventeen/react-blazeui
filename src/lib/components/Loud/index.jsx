import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Loud(props) {
  const {
    children, className, dataName, ...other
  } = props;
  const classes = classNames('u-text--loud', className);
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

Loud.propTypes = {
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

Loud.defaultProps = {
  children: null,
  className: null,
  dataName: 'loud',
};

export default Loud;
