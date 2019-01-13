import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Body(props) {
  const { children, className, ...other } = props;
  const classes = classNames('c-card__body', className);
  return (
    <div {...other} className={classes}>
      { children }
    </div>
  );
}

Body.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
};

Body.defaultProps = {
  children: null,
  className: null,
};

export default Body;
