import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from './Item';

function List (props) {
  const { children, className, ordered, unstyled, inline } = props;
  const classes = classNames(
      'c-list',
      { 'c-list--ordered': ordered },
      { 'c-list--unstyled': unstyled },
      { 'c-list--inline': inline },
      className
  );

  if (ordered) {
    return (
      <ol {...props} className={classes}>
        { children }
      </ol>
    );
  }

  return (
      <ul {...props} className={classes}>
        { children }
      </ul>
  );
}

List.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Defines an ordered list
   */
  ordered: PropTypes.bool,
  /**
   * Defines an unstyled list
   */
  unstyled: PropTypes.bool,
  /**
   * Defines an inline list
   */
  inline: PropTypes.bool,
};

List.defaultProps = {
  children: null,
  className: null,
  ordered: false,
  unstyled: false,
  inline: false,
};


List.Item = Item;

export default List;