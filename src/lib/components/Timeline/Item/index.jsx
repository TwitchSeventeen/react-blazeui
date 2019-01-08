import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omitOwnProps from '../../../utils/omitOwnProps';

function Item(props) {
  const { children, className, last, type } = props;
  const classes = classNames(
    'c-timeline-item',
    { 'c-timeline-item--last': last },
    { [`c-timeline-item--${type}`]: type },
    className,
  );
  const spreadProps = omitOwnProps(props);
  return (
    <li {...spreadProps} className={classes}>
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
};

Item.defaultProps = {
  children: null,
  className: null,
  last: false,
  type: null,
};

export default Item;
