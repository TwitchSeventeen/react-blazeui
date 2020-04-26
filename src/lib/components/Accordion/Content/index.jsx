import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '../../Card';

function Content(props) {
  const {
    children, className, dataName, ...other
  } = props;
  const classes = classNames('c-card__item--pane', className);
  return (
    <Card.Item
      {...other}
      className={classes}
      dataName={dataName}
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
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
};

Content.defaultProps = {
  children: null,
  className: null,
  dataName: 'accordion-content',
};

export default Content;
