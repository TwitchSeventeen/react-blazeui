import React from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import Divider from './Divider';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
import classNames from 'classnames';

function Card (props) {
  const { children, grouped } = props;
  const classes = classNames('c-card', { 'c-card--grouped': grouped });
  return (
      <div className={classes}>
        { children }
      </div>
  );
}

Card.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Defined a grouped card
   */
  grouped: PropTypes.bool,
};

Card.defaultProps = {
  children: null,
  grouped: false,
};

Card.Body = Body;
Card.Divider = Divider;
Card.Item = Item;
Card.Header = Header;
Card.Footer = Footer;

export default Card;