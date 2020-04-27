import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Breadcrumbs(props) {
  const { children, dataName,  as: Component, ...other } = props;
  return (
    <Component
      {...other}
      aria-label="Breadcrumb"
      data-name={dataName}
    >
      <ol className="c-breadcrumbs">
        { children }
      </ol>
    </Component>
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
  /**
   * Element type to render as
   */
  as: PropTypes.elementType,
};

Breadcrumbs.defaultProps = {
  children: null,
  dataName: 'breadcrumbs',
  as: 'nav',
};

Breadcrumbs.Item = Item;

export default Breadcrumbs;
