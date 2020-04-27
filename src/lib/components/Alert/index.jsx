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
    children, dismissable, as: Component, onDismiss, type, dataName, ...other
  } = props;
  const classes = classNames('c-alert', { [`c-alert--${type}`]: type });
  return (
    <Component
      role="alert"
      {...other}
      data-name={dataName}
      className={classes}
    >
      {children}
      { dismissable
        && <button className="c-button c-button--close" onClick={onDismiss} type="button">&times;</button>}
    </Component>
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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
  /**
   * Element type to render as
   */
  as: PropTypes.elementType,
};

Alert.defaultProps = {
  children: null,
  dismissable: false,
  onDismiss: null,
  type: null,
  dataName: 'alert',
  as: 'div',
};

export default Alert;
