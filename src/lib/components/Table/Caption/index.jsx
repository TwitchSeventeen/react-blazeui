import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Caption(props) {
  const {
    children, as: Component, className, dataName, ...other
  } = props;

  const classes = classNames(
    'c-table__caption',
    className,
  );

  return (
    <Component
      className={classes}
      {...other}
      data-name={dataName}
    >
      { children }
    </Component>
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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
  /**
   * Element type to render as
   */
  as: PropTypes.elementType,
};

Caption.defaultProps = {
  className: null,
  children: null,
  dataName: 'table-caption',
  as: 'caption',
};

export default Caption;
