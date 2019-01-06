import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Container(props) {
  const { children, className, size } = props;
  const classes = classNames(
    'u-text',
    'o-container',
    `o-container--${size}`, className,
  );
  return (
    <div className={classes}>
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
};

Container.defaultProps = {
  children: null,
  className: null,
  size: 'xlarge',
};


export default Container;
