import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '../../Card';

function Content(props) {
  const { children, className, ...other } = props;
  const classes = classNames('c-card__item--pane', className);
  return (
    <Card.Item
      {...other}
      className={classes}
    >
      { children }
    </Card.Item>
  );
}

Content.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
};

Content.defaultProps = {
  children: null,
  className: null,
};

export default Content;
