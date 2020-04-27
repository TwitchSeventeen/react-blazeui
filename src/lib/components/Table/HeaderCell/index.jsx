import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function HeaderCell(props) {
  const {
    children, className, dataName, ...other
  } = props;

  const classes = classNames(
    'c-table__cell',
    className,
  );

  return (
    <th
      className={classes}
      {...other}
      data-name={dataName}
    >
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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

HeaderCell.defaultProps = {
  className: null,
  children: null,
  dataName: 'table-headercell',
};

export default HeaderCell;
