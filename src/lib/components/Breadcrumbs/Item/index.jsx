import React from 'react';

function Item (props) {
  const { children, active } = props;
  return (
      <li
          className="c-breadcrumbs__crumb"
          aria-current={ active ? 'page' : null }
      >
          { children }
      </li>
  );
}

export default Item;