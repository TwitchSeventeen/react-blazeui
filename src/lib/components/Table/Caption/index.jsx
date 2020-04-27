import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Caption(props) {
  const {
    children, className, dataName, ...other
  } = props;

  const classes = classNames(
    'c-table__caption',
    className,
  );

  return (
    <caption
      className={classes}
      {...other}
      data-name={dataName}
    >
      { children }
    </caption>
  );
}

Caption.propTypes = {
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

Caption.defaultProps = {
  className: null,
  children: null,
  dataName: 'table-caption',
};

export default Caption;
