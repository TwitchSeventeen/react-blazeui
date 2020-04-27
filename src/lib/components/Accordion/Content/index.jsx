import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '../../Card';

function Content(props) {
  const {
    children, className, as: Component, dataName, ...other
  } = props;
  const classes = classNames('c-card__item--pane', className);
  return (
    <Component
      {...other}
      className={classes}
      dataName={dataName}
    >
      { children }
    </Component>
  );
}

Content.propTypes = {
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

Content.defaultProps = {
  children: null,
  className: null,
  dataName: 'accordion-content',
  as: Card.Item,
};

export default Content;
