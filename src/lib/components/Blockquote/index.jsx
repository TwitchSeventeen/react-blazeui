import React from 'react';
import PropTypes from 'prop-types';
import omitOwnProps from '../../utils/omitOwnProps';

function Blockquote(props) {
  const { children, cite } = props;
  const spreadProps = omitOwnProps(props);
  return (
    <blockquote {...spreadProps} className="u-blockquote">
      <div className="u-blockquote__body">
        { children }
      </div>
      { cite
          && <footer className="u-blockquote__footer">{ cite }</footer>
        }
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
};

Blockquote.defaultProps = {
  children: null,
  cite: null,
};

export default Blockquote;
