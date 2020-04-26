import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Field(props) {
  const {
    className, iconLeft, iconRight, children, fixed, dataName, ...other
  } = props;
  const classes = classNames(
    'o-field',
    { 'o-field--icon-left': iconLeft },
    { 'o-field--icon-right': iconRight },
    { 'o-field--fixed': fixed },
    className,
  );

  return (
    <div
      {...other}
      className={classes}
      data-name={dataName}
    >
      { children }
    </div>
  );
}

Field.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Defines a left icon
   */
  iconLeft: PropTypes.bool,
  /**
   * Defines a right icon
   */
  iconRight: PropTypes.bool,
  /**
   * Defines a fixed with field
   */
  fixed: PropTypes.bool,
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Field.defaultProps = {
  className: null,
  iconLeft: false,
  iconRight: false,
  children: null,
  fixed: false,
  dataName: 'input-field',
};

export default Field;
