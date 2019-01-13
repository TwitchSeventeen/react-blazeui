import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Footer(props) {
  const {
    children, block, className, ...other
  } = props;
  const classes = classNames('c-card__footer', { 'c-card__footer--block': block }, className);
  return (
    <footer {...other} className={classes}>
      { children }
    </footer>
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
};

Footer.defaultProps = {
  block: false,
  children: null,
  className: null,
};

export default Footer;
