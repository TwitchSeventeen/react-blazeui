import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Divider(props) {
  const {
    children, type, className, as: Component, dataName, ...other
  } = props;
  const classes = classNames('c-divider', { [`c-divider--${type}`]: type }, className);
  return (
    <Component
      {...other}
      className={classes}
      data-name={dataName}
    >
      <div className="c-divider__content">
        { children }
      </div>
    </Component>
  );
}

Divider.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Defines the line style of the divider
   */
  type: PropTypes.oneOf([
    'solid',
    'dashed',
  ]),
  /**
   * Additional classes
   */
  className: PropTypes.string,
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

Divider.defaultProps = {
  children: null,
  type: 'solid',
  className: null,
  dataName: 'divider',
  as: 'div',
};

export default Divider;
