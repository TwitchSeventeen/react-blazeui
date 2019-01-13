import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Breadcrumbs(props) {
  const { children, ...other } = props;
  return (
    <nav {...other} aria-label="Breadcrumb">
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
};

Breadcrumbs.defaultProps = {
  children: null,
};

Breadcrumbs.Item = Item;

export default Breadcrumbs;
