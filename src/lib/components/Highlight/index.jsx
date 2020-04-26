import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Highlight(props) {
  const {
    children, className, dataName, ...other
  } = props;
  const classes = classNames('u-text--highlight', className);
  return (
    <span
      {...other}
      className={classes}
      data-name={dataName}
    >
      { children }
    </span>
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
};

Highlight.defaultProps = {
  children: null,
  className: null,
  dataName: 'highlight',
};

export default Highlight;
