import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Key(props) {
  const { children, className, ...other } = props;
  const classes = classNames('u-kbd', className);
  return (
    <kbd {...other} className={classes}>
      { children }
    </kbd>
  );
}

Key.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
};

Key.defaultProps = {
  children: null,
  className: null,
};

export default Key;
