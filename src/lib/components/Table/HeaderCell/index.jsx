import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function HeaderCell(props) {
  const {
    children, className, as: Component, dataName, ...other
  } = props;

  const classes = classNames(
    'c-table__cell',
    className,
  );

  return (
    <Component
      className={classes}
      {...other}
      data-name={dataName}
    >
      { children }
    </Component>
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
  /**
   * Element type to render as
   */
  as: PropTypes.elementType,
};

HeaderCell.defaultProps = {
  className: null,
  children: null,
  dataName: 'table-headercell',
  as: 'th',
};

export default HeaderCell;
