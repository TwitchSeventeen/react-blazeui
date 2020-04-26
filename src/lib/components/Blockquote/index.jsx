import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Blockquote(props) {
  const {
    children, cite, className, ...other
  } = props;
  const classes = classNames('u-blockquote', className);
  return (
    <blockquote {...other} className={classes}>
      <div className="u-blockquote__body">
        { children }
      </div>
      { cite
          && <footer className="u-blockquote__footer">{ cite }</footer>}
    </blockquote>
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
};

Blockquote.defaultProps = {
  children: null,
  cite: null,
  className: null,
};

export default Blockquote;
