import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Cell from './Cell';

function Grid(props) {
  const {
    align,
    children,
    className,
    full,
    wrap,
    xsmall,
    small,
    medium,
    large,
    xlarge,
    huge,
    noGutter,
    dataName,
    as: Component,
    ...other
  } = props;
  const classes = classNames(
    'o-grid',
    'u-text',
    { 'o-grid--full': full },
    { 'o-grid--wrap': wrap },
    { [`o-grid--${align}`]: align },
    { 'o-grid--no-gutter': noGutter },
    { [`o-grid--xsmall-${xsmall}`]: xsmall },
    { [`o-grid--small-${small}`]: small },
    { [`o-grid--medium-${medium}`]: medium },
    { [`o-grid--large-${large}`]: large },
    { [`o-grid--xlarge-${xlarge}`]: xlarge },
    { [`o-grid--super-${huge}`]: huge },
    className,
  );
  return (
    <Component
      {...other}
      className={classes}
      data-name={dataName}
    >
      { children }
    </Component>
  );
}

Grid.propTypes = {
  /**
   * Vertical alignment of the Grid contents
   */
  align: PropTypes.oneOf([
    'top',
    'center',
    'bottom',
  ]),
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Makes all child Cells full width
   */
  full: PropTypes.bool,
  /**
   * Wrap child Cells within the Grid
   */
  wrap: PropTypes.bool,
  /**
   * Cell display for xsmall screens
   */
  xsmall: PropTypes.oneOf([
    'fit',
    'full',
  ]),
  /**
   * Cell display for small screens
   */
  small: PropTypes.oneOf([
    'fit',
    'full',
  ]),
  /**
   * Cell display for medium screens
   */
  medium: PropTypes.oneOf([
    'fit',
    'full',
  ]),
  /**
   * Cell display for large screens
   */
  large: PropTypes.oneOf([
    'fit',
    'full',
  ]),
  /**
   * Cell display for xlarge screens
   */
  xlarge: PropTypes.oneOf([
    'fit',
    'full',
  ]),
  /**
   * Cell display for huge screens
   */
  huge: PropTypes.oneOf([
    'fit',
    'full',
  ]),
  /**
   * Specifies no spacing between Cells
   */
  noGutter: PropTypes.bool,
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

Grid.defaultProps = {
  align: null,
  children: null,
  className: null,
  full: false,
  wrap: false,
  xsmall: null,
  small: null,
  medium: null,
  large: null,
  xlarge: null,
  huge: null,
  noGutter: false,
  dataName: 'grid',
  as: 'div',
};

Grid.Cell = Cell;

export default Grid;
