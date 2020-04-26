import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Body(props) {
  const {
    children, className, dataName, ...other
  } = props;
  const classes = classNames('c-card__body', className);
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

Body.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
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

Body.defaultProps = {
  children: null,
  className: null,
  dataName: 'card-body',
};

export default Body;
