import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omitOwnProps from '../../utils/omitOwnProps';
import Item from './Item';

function Timeline(props) {
  const { children, className } = props;
  const classes = classNames(
    'o-timeline',
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
};

Timeline.defaultProps = {
  children: null,
  className: null,
};

Timeline.Item = Item;

export default Timeline;
