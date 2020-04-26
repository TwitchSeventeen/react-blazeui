import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '../Card';
import Title from './Title';
import Content from './Content';

function Accordion(props) {
  const {
    children, className, dataName, ...other
  } = props;
  const classes = classNames('c-card--accordion', className);
  return (
    <Card
      {...other}
      className={classes}
      dataName={dataName}
    >
      { children }
    </Card>
  );
}

Accordion.propTypes = {
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

Accordion.defaultProps = {
  children: null,
  className: null,
  dataName: 'accordion',
};

Accordion.Title = Title;
Accordion.Content = Content;

export default Accordion;
