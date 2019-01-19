import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Image(props) {
  const {
    className, src, alt, user, filter, likes, height, width, ...other
  } = props;
  const classes = classNames(
    'o-image',
    className,
  );

  let source = src;

  if (!src) {
    const userProp = user ? `user/${user}/` : '';
    const likesProp = likes ? 'likes/' : '';
    const filterProp = filter ? `${(height && width) ? '' : 'featured/'}?${filter}` : '';
    const sizeProp = (height && width) ? `${width}x${height}/` : '';
    source = `https://source.unsplash.com/${filter || user ? '' : 'random/'}${userProp}${sizeProp}${likesProp}${filterProp}`;
  }

  return (
    <img {...other} className={classes} src={source} alt={alt} />
  );
}

Image.propTypes = {
  /**
   * Additional classes
   */
  className: PropTypes.string,
  /**
   * Url for the image
   */
  src: PropTypes.string,
  /**
   * Alternate text
   */
  alt: PropTypes.string,
  /**
   * Choose a random photo from a specific user.
   * From Unsplash.
   */
  user: PropTypes.string,
  /**
   * Choose a random photo that's been liked by a specific user.
   * Use with the user prop.
   */
  likes: PropTypes.bool,
  /**
   * Comma separated list of filters to find images by
   */
  filter: PropTypes.string,
  /**
   * Height of the image to fetch
   */
  height: PropTypes.number,
  /**
   * Width of the image to fetch
   */
  width: PropTypes.number,
};

Image.defaultProps = {
  className: null,
  src: null,
  alt: 'random placeholder image',
  user: null,
  likes: false,
  filter: null,
  height: null,
  width: null,
};

export default Image;
