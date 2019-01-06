import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Footer(props) {
  const { children, block } = props;
  const classes = classNames('c-card__footer', { 'c-card__footer--block': block });
  return (
    <footer className={classes}>
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
};

Footer.defaultProps = {
  block: false,
  children: null,
};

export default Footer;
