import React from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import Divider from './Divider';
import Item from './Item';
import Footer from './Footer';

function Card (props) {
  const { children } = props;
  return (
      <div className="c-card">
        { children }
      </div>
  );
}

Card.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};

Card.Body = Body;
Card.Divider = Divider;
Card.Item = Item;
Card.Footer = Footer;

export default Card;