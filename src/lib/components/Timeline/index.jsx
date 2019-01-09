import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omitOwnProps from '../../utils/omitOwnProps';
import Item from './Item';

function Timeline(props) {
  const { children, className, loading, alternate } = props;
  const classes = classNames(
    'o-timeline',
    { 'o-timeline--loading': loading },
    { 'o-timeline--alternate': alternate },
    className,
  );
  const spreadProps = omitOwnProps(props);
  return (
    <ul {...spreadProps} className={classes}>
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
};

Timeline.defaultProps = {
  children: null,
  className: null,
  loading: false,
  alternate: false,
};

Timeline.Item = Item;

export default Timeline;
