import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../Image';

function Avatar(props) {
  const {
    initials, className, size, as: Component, src, alt, src2, alt2, dataName, ...other
  } = props;
  const classes = classNames(
    'c-avatar',
    `u-${size}`,
    className,
  );
  return (
    <Component
      className={classes}
      data-text={initials}
      data-name={dataName}
      {...other}
    >
      { src
          && <Image className="c-avatar__img" src={src} alt={alt} />}

      { src2
        && <Image className="c-avatar__img" src={src2} alt={alt2} />}
    </Component>
  );
}

Avatar.propTypes = {
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * The avatar size
   */
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'super',
  ]),
  /**
   * Text to display in the middle of the circle
   */
  initials: PropTypes.string,
  /**
   * URL to the image to display
   */
  src: PropTypes.string,
  /**
   * Alternate text for the image
   */
  alt: PropTypes.string,
  /**
   * URL for the secondary image to display
   */
  src2: PropTypes.string,
  /**
   * Alternate text for the secondary image
   */
  alt2: PropTypes.string,
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

Avatar.defaultProps = {
  initials: null,
  className: null,
  size: null,
  src: null,
  alt: null,
  src2: null,
  alt2: null,
  dataName: 'avatar',
  as: 'div',
};

export default Avatar;
