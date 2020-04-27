import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Abbr(props) {
  const {
    children, title, className, as: Component, dataName, ...other
  } = props;
  const classes = classNames('u-text--help', className);
  return (
    <Component
      {...other}
      className={classes}
      title={title}
      data-name={dataName}
    >
      { children }
    </Component>
  );
}

Abbr.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Title attribute for the abbreviation component
   */
  title: PropTypes.string.isRequired,
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

Abbr.defaultProps = {
  children: null,
  className: null,
  dataName: 'abbr',
  as: 'abbr',
};

export default Abbr;
