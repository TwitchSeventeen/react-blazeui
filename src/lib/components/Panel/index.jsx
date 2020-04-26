import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Panel(props) {
  const {
    children, className, dataName, ...other
  } = props;
  const classes = classNames(
    'o-panel-container',
    className,
  );
  return (
    <div
      {...other}
      className={classes}
      data-name={dataName}
    >
      <div className="o-panel">
        { children }
      </div>
    </div>
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
};

Panel.defaultProps = {
  children: null,
  className: null,
  dataName: 'panel',
};

export default Panel;
