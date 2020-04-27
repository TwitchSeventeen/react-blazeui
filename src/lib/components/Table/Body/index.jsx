import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Body(props) {
  const {
    children, className, dataName, ...other
  } = props;

  const classes = classNames(
    'c-table__body',
    className,
  );

  return (
    <tbody
      className={classes}
      {...other}
      data-name={dataName}
    >
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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Body.defaultProps = {
  className: null,
  children: null,
  dataName: 'table-body',
};

export default Body;
