import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Body(props) {
  const {
    children, className, dataName, as: Component, ...other
  } = props;

  const classes = classNames(
    'c-table__body',
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
  /**
   * Element type to render as
   */
  as: PropTypes.elementType,
};

Body.defaultProps = {
  className: null,
  children: null,
  dataName: 'table-body',
  as: 'tbody',
};

export default Body;
