import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Divider(props) {
  const { children, type, className, ...other } = props;
  const classes = classNames('c-divider', { [`c-divider--${type}`]: type }, className);
  return (
    <div {...other} className={classes}>
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
};

Divider.defaultProps = {
  children: null,
  type: 'solid',
  className: null,
};

export default Divider;
