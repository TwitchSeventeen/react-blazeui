import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Key(props) {
  const {
    children, className, dataName, ...other
  } = props;
  const classes = classNames('u-kbd', className);
  return (
    <kbd
      {...other}
      className={classes}
      data-name={dataName}
    >
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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Key.defaultProps = {
  children: null,
  className: null,
  dataName: 'key',
};

export default Key;
