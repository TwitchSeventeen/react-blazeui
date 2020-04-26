import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Divider(props) {
  const {
    children, type, className, dataName, ...other
  } = props;
  const classes = classNames('c-divider', { [`c-divider--${type}`]: type }, className);
  return (
    <div
      {...other}
      className={classes}
      data-name={dataName}
    >
      <div className="c-divider__content">
        { children }
      </div>
    </div>
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
};

Divider.defaultProps = {
  children: null,
  type: 'solid',
  className: null,
  dataName: 'divider',
};

export default Divider;
