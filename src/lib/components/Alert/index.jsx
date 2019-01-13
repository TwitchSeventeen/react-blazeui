import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * An alert message
 * @param props
 * @returns {*}
 * @constructor
 */
function Alert(props) {
  const {
    children, dismissable, onDismiss, type, ...other
  } = props;
  const classes = classNames('c-alert', { [`c-alert--${type}`]: type });
  return (
    <div role="alert" {...other} className={classes}>
      {children}
      { dismissable
        && <button className="c-button c-button--close" onClick={onDismiss} type="button">&times;</button>
      }
    </div>
  );
}

Alert.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * User can dismiss the alert
   */
  dismissable: PropTypes.bool,
  /**
   * Function called when user dismisses the alert
   */
  onDismiss: PropTypes.func,
  /**
   * The type of alert
   */
  type: PropTypes.oneOf([
    'brand',
    'info',
    'warning',
    'success',
    'error',
  ]),
};

Alert.defaultProps = {
  children: null,
  dismissable: false,
  onDismiss: null,
  type: null,
};

export default Alert;
