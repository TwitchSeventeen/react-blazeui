import omit from 'lodash/omit';

/**
 * Remove component props before spreading them.
 * This avoids pointless props being passed to DOM elements.
 * @param proptypes
 * @returns {function(*=)}
 */
function omitOwnProps(proptypes) {
  const keys = Object.keys(proptypes);
  return props => omit(props, keys);
}

export default omitOwnProps;
