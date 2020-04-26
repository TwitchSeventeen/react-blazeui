import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Body from './Body';
import Divider from './Divider';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';

function Card(props) {
  const {
    children, grouped, className, dataName, ...other
  } = props;
  const classes = classNames('c-card', { 'c-card--grouped': grouped }, className);
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

Card.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Defined a grouped card
   */
  grouped: PropTypes.bool,
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

Card.defaultProps = {
  className: null,
  children: null,
  grouped: false,
  dataName: 'card',
};

Card.Body = Body;
Card.Divider = Divider;
Card.Item = Item;
Card.Header = Header;
Card.Footer = Footer;

export default Card;
