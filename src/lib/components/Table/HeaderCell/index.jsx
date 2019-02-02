import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function HeaderCell(props) {
  const {
    children, className, ...other
  } = props;

  const classes = classNames(
    'c-table__cell',
    className,
  );

  return (
    <th className={classes} {...other}>
      { children }
    </th>
  );
}

HeaderCell.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
};

HeaderCell.defaultProps = {
  className: null,
  children: null,
};

export default HeaderCell;
