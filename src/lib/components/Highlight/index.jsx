import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Highlight(props) {
  const {
    children, className, dataName, as: Component, ...other
  } = props;
  const classes = classNames('u-text--highlight', className);
  return (
    <Component
      {...other}
      className={classes}
      data-name={dataName}
    >
      { children }
    </Component>
  );
}

Highlight.propTypes = {
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

Highlight.defaultProps = {
  children: null,
  className: null,
  dataName: 'highlight',
  as: 'span',
};

export default Highlight;
