import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Quiet(props) {
  const { children, className, ...other } = props;
  const classes = classNames('u-text--quiet', className);
  return (
    <span {...other} className={classes}>
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
};

Quiet.defaultProps = {
  children: null,
  className: null,
};

export default Quiet;
