import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omitOwnProps from '../../utils/omitOwnProps';

function Abbr(props) {
  const { children, title, className } = props;
  const classes = classNames('u-text--help', className);
  const spreadProps = omitOwnProps(props);
  return (
    <abbr
      {...spreadProps}
      className={classes}
      title={title}
    >
      { children }
    </abbr>
  );
}

Abbr.propTypes = {
  /**
   * This element can have children
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Title attribute for the abbreviation component
   */
  title: PropTypes.string.isRequired,
};

Abbr.defaultProps = {
  children: null,
  className: null,
};

export default Abbr;
