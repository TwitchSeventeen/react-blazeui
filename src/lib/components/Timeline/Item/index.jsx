import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Item(props) {
  const {
    children, className, last, type, loading, left, dataName, ...other
  } = props;
  const classes = classNames(
    'c-timeline-item',
    { 'c-timeline-item--last': last },
    { [`c-timeline-item--${type}`]: type },
    { 'c-timeline-item--loading': loading },
    { 'c-timeline-item--left': left },
    className,
  );

  return (
    <li
      {...other}
      className={classes}
      data-name={dataName}
    >
      <div className="c-timeline-item__body">
        { children }
      </div>
    </li>
  );
}

Item.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Identifies the last item in a timeline
   */
  last: PropTypes.bool,
  /**
   * The type of item
   */
  type: PropTypes.oneOf([
    'brand',
    'info',
    'warning',
    'success',
    'error',
  ]),
  /**
   * Defines an item that hasn't happened yet
   */
  loading: PropTypes.bool,
  /**
   * Displays an item on the left side of the Timeline
   */
  left: PropTypes.bool,
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Item.defaultProps = {
  children: null,
  className: null,
  last: false,
  type: null,
  loading: false,
  left: false,
  dataName: 'timeline-item',
};

export default Item;
