/**
 * Remove component props before spreading them.
 * This avoids pointless props being passed to DOM elements.
 * @param proptypes
 * @returns {function(*=)}
 */
function omitOwnProps(proptypes) {
  const keys = Object.keys(proptypes);

  const result = {};
  // eslint-disable-next-line
  for (const property in proptypes) {
    // eslint-disable-next-line
    if (proptypes.hasOwnProperty(property) && keys.indexOf(property) === -1) {
      result[property] = proptypes[property];
    }
  }

  return result;
}

export default omitOwnProps;
