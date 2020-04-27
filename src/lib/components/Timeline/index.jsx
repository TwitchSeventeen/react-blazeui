import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from './Item';

function Timeline(props) {
  const {
    children, className, loading, alternate, dataName, ...other
  } = props;
  const classes = classNames(
    'o-timeline',
    { 'o-timeline--loading': loading },
    { 'o-timeline--alternate': alternate },
    className,
  );

  return (
    <ul
      {...other}
      className={classes}
      data-name={dataName}
    >
      { children }
    </ul>
  );
}

Timeline.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * This Timeline contains Item's that haven't happened yet
   */
  loading: PropTypes.bool,
  /**
   * The items on this Timeline can alternate between left and right side
   */
  alternate: PropTypes.bool,
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Timeline.defaultProps = {
  children: null,
  className: null,
  loading: false,
  alternate: false,
  dataName: 'timeline',
};

Timeline.Item = Item;

export default Timeline;
