import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card';
import classNames from 'classnames';

function Content (props) {
  const { children, className, } = props;
  const classes = classNames('c-card__item--pane', className);
  return (
      <Card.Item className={classes}>
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