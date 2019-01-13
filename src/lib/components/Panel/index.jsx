import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Panel(props) {
  const { children, className, ...other } = props;
  const classes = classNames(
    'o-panel-container',
    className,
  );
  return (
    <div {...other} className={classes}>
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
};

Panel.defaultProps = {
  children: null,
  className: null,
};

export default Panel;
