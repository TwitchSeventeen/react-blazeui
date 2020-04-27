import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Panel(props) {
  const {
    children, className, as: Component, dataName, ...other
  } = props;
  const classes = classNames(
    'o-panel-container',
    className,
  );
  return (
    <Component
      {...other}
      className={classes}
      data-name={dataName}
    >
      <div className="o-panel">
        { children }
      </div>
    </Component>
  );
}

Panel.propTypes = {
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

Panel.defaultProps = {
  children: null,
  className: null,
  dataName: 'panel',
  as: 'div',
};

export default Panel;
