import React from 'react';
import Item from './Item';

function Breadcrumbs (props) {
  const { children } = props;
  return (
      <nav aria-label="Breadcrumb">
        <ol className="c-breadcrumbs">
          { children }
        </ol>
      </nav>
  );
}

Breadcrumbs.Item = Item;

export default Breadcrumbs;