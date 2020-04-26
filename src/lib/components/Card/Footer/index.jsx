import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Footer(props) {
  const {
    children, block, className, dataName, ...other
  } = props;
  const classes = classNames('c-card__footer', { 'c-card__footer--block': block }, className);
  return (
    <footer
      {...other}
      className={classes}
      data-name={dataName}
    >
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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Footer.defaultProps = {
  block: false,
  children: null,
  className: null,
  dataName: 'card-footer',
};

export default Footer;
