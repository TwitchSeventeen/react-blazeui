import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Title from './Title';
import Content from './Content';
import classNames from 'classnames';

function Accordion (props) {
  const { children, className } = props;
  const classes = classNames('c-card--accordion', className);
  return (
      <Card
          {...props}
          className={classes}
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
};

Accordion.defaultProps = {
  children: null,
  className: null,
};

Accordion.Title = Title;
Accordion.Content = Content;

export default Accordion;