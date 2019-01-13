import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Loud(props) {
  const { children, className, ...other } = props;
  const classes = classNames('u-text--loud', className);
  return (
    <span {...other} className={classes}>
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
};

Loud.defaultProps = {
  children: null,
  className: null,
};

export default Loud;
