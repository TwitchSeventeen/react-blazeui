import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Divider(props) {
  const { children, type, ...other } = props;
  const classes = classNames('c-divider', { [`c-divider--${type}`]: type });
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
};

Divider.defaultProps = {
  children: null,
  type: 'solid',
};

export default Divider;
