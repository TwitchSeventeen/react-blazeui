import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Container(props) {
  const {
    children, className, size, dataName, ...other
  } = props;
  const classes = classNames(
    'u-text',
    'o-container',
    `o-container--${size}`, className,
  );
  return (
    <div
      {...other}
      className={classes}
      data-name={dataName}
    >
      { children }
    </div>
  );
}

Container.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * The container size
   */
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'super',
  ]),
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Container.defaultProps = {
  children: null,
  className: null,
  size: 'xlarge',
  dataName: 'container',
};


export default Container;
