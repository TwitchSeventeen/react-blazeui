import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Group(props) {
  const {
    className, children, stacked, rounded, roundedLeft, roundedRight, ...other
  } = props;
  const classes = classNames(
    'c-input-group',
    { 'c-input-group--stacked': stacked },
    { 'c-input-group--rounded': rounded },
    { 'c-input-group--rounded-left': roundedLeft },
    { 'c-input-group--rounded-right': roundedRight },
    className,
  );

  return (
    <div {...other} className={classes}>
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
  /**
   * Defines a group with rounded corners
   */
  rounded: PropTypes.bool,
  /**
   * Defines a group with rounded left corners
   */
  roundedLeft: PropTypes.bool,
  /**
   * Defines a group with rounded right corners
   */
  roundedRight: PropTypes.bool,
};

Group.defaultProps = {
  className: null,
  children: null,
  stacked: false,
  rounded: false,
  roundedLeft: false,
  roundedRight: false,
};

export default Group;
