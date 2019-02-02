import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Caption(props) {
  const {
    children, className, ...other
  } = props;

  const classes = classNames(
    'c-table__caption',
    className,
  );

  return (
    <caption className={classes} {...other}>
      { children }
    </caption>
  );
}

Caption.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
};

Caption.defaultProps = {
  className: null,
  children: null,
};

export default Caption;
