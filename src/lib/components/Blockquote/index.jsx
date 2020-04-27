import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Blockquote(props) {
  const {
    children, cite, className, as: Component, dataName, ...other
  } = props;
  const classes = classNames('u-blockquote', className);
  return (
    <Component
      {...other}
      className={classes}
      data-name={dataName}
    >
      <div className="u-blockquote__body">
        { children }
      </div>
      { cite
          && <footer className="u-blockquote__footer">{ cite }</footer>}
    </Component>
  );
}

Blockquote.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Footer citation for the quote
   */
  cite: PropTypes.string,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Optional data-name attribute
   * (use for testing/selection)
   */
  dataName: PropTypes.string,
  /**
   * Element type to render as
   */
  as: PropTypes.elementType,
};

Blockquote.defaultProps = {
  children: null,
  cite: null,
  className: null,
  dataName: 'blockquote',
  as: 'blockquote',
};

export default Blockquote;
