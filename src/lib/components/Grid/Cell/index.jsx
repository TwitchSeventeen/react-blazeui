import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Cell(props) {
  const {
    align,
    children,
    className,
    offset,
    width,
    xsmall,
    small,
    medium,
    large,
    xlarge,
    huge,
    noGutter,
    fixedWidth,
  } = props;
  const classes = classNames(
    'o-grid__cell',
    { [`o-grid__cell--width-${width}`]: width },
    { [`o-grid__cell--offset-${offset}`]: offset },
    { [`o-grid__cell--${align}`]: align },
    { 'o-grid__cell--no-gutter': noGutter },
    { 'o-grid__cell--width-fixed': fixedWidth },
    { [`o-grid__cell--width-${xsmall}@xsmall`]: xsmall },
    { [`o-grid__cell--width-${small}@small`]: small },
    { [`o-grid__cell--width-${medium}@medium`]: medium },
    { [`o-grid__cell--width-${large}@large`]: large },
    { [`o-grid__cell--width-${xlarge}@xlarge`]: xlarge },
    { [`o-grid__cell--width-${huge}@super`]: huge },
    className,
  );
  return (
    <div {...props} className={classes}>
      { children }
    </div>
  );
}

Cell.propTypes = {
  /**
   * Vertical alignment of the Cell
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
   * The offset of this cell as a percentage of its parent.
   * Must be a multiple of 5, or 33, 66.
   */
  offset: PropTypes.number,
  /**
   * Width of this cell as a percentage of its parent.
   * Must be a multiple of 5, or 33, 66.
   */
  width: PropTypes.number,
  /**
   * Cell display for xsmall screens
   * Must be a multiple of 5, or 33, 66.
   */
  xsmall: PropTypes.number,
  /**
   * Cell display for small screens
   * Must be a multiple of 5, or 33, 66.
   */
  small: PropTypes.number,
  /**
   * Cell display for medium screens
   * Must be a multiple of 5, or 33, 66.
   */
  medium: PropTypes.number,
  /**
   * Cell display for large screens
   * Must be a multiple of 5, or 33, 66.
   */
  large: PropTypes.number,
  /**
   * Cell display for xlarge screens
   * Must be a multiple of 5, or 33, 66.
   */
  xlarge: PropTypes.number,
  /**
   * Cell display for super screens
   * Must be a multiple of 5, or 33, 66.
   */
  huge: PropTypes.number,
  /**
   * Specifies no spacing for the Cell
   */
  noGutter: PropTypes.bool,
  /**
   * Specifies this Cell has a fixed width
   */
  fixedWidth: PropTypes.bool,
};

Cell.defaultProps = {
  align: null,
  children: null,
  className: null,
  offset: null,
  width: null,
  xsmall: null,
  small: null,
  medium: null,
  large: null,
  xlarge: null,
  huge: null,
  noGutter: false,
  fixedWidth: false,
};

export default Cell;
