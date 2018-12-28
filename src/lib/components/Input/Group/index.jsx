import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Group (props) {
  const { className, children, stacked } = props;
  const classes = classNames(
      'c-input-group',
      { 'c-input-group--stacked': stacked },
      className
  );

  return (
      <div {...props} className={classes}>
        { children }
      </div>
  );
}

Group.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Defines a stacked group of Inputs
   */
  stacked: PropTypes.bool,
};

Group.defaultProps = {
  className: null,
  children: null,
  stacked: false,
};

export default Group;