import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Breadcrumbs(props) {
  const { children, dataName, ...other } = props;
  return (
    <nav
      {...other}
      aria-label="Breadcrumb"
      data-name={dataName}
    >
      <ol className="c-breadcrumbs">
        { children }
      </ol>
    </nav>
  );
}

Breadcrumbs.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  children: null,
  dataName: 'breadcrumbs',
};

Breadcrumbs.Item = Item;

export default Breadcrumbs;
