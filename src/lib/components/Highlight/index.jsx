import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Highlight(props) {
  const { children, className, ...other } = props;
  const classes = classNames('u-text--highlight', className);
  return (
    <span {...other} className={classes}>
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
};

Highlight.defaultProps = {
  children: null,
  className: null,
};

export default Highlight;
