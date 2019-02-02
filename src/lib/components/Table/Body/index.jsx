import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Body(props) {
  const {
    children, className, ...other
  } = props;

  const classes = classNames(
    'c-table__body',
    className,
  );

  return (
    <tbody className={classes} {...other}>
      { children }
    </tbody>
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
  className: null,
  children: null,
};

export default Body;
