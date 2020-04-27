import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Footer(props) {
  const {
    children, block, className, as: Component, dataName, ...other
  } = props;
  const classes = classNames('c-card__footer', { 'c-card__footer--block': block }, className);
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

Footer.propTypes = {
  /**
   * A block footer with no padding
   */
  block: PropTypes.bool,
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

Footer.defaultProps = {
  block: false,
  children: null,
  className: null,
  dataName: 'card-footer',
  as: 'footer',
};

export default Footer;
