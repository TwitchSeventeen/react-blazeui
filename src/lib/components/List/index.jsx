import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from './Item';

function List(props) {
  const {
    children, className, ordered, unstyled, inline, dataName, ...other
  } = props;
  const classes = classNames(
    'c-list',
    { 'c-list--ordered': ordered },
    { 'c-list--unstyled': unstyled },
    { 'c-list--inline': inline },
    className,
  );

  if (ordered) {
    return (
      <ol
        {...other}
        className={classes}
        data-name={dataName}
      >
        { children }
      </ol>
    );
  }

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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

List.defaultProps = {
  children: null,
  className: null,
  ordered: false,
  unstyled: false,
  inline: false,
  dataName: 'list',
};


List.Item = Item;

export default List;
