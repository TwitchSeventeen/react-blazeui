import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Label(props) {
  const {
    className, choice, children, as: Component, inputId, dataName, ...other
  } = props;
  const classes = classNames(
    'c-field',
    { 'c-field--choice': choice },
    { 'c-field': choice },
    className,
  );

  return (
    <Component
      {...other}
      className={classes}
      htmlFor={inputId}
      data-name={dataName}
    >
      { children }
    </Component>
  );
}

Label.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Defines a label with a radio or checkbox
   */
  choice: PropTypes.bool,
  /**
   * ID to link to input for accessibility
   */
  inputId: PropTypes.string,
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

Label.defaultProps = {
  children: null,
  className: null,
  choice: false,
  inputId: null,
  dataName: 'input-label',
  as: 'label',
};

export default Label;
