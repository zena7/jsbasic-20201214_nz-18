/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split('-').map((item, index) => {
    if (index > 0) {
      return item[0].toUpperCase() + item.slice(1);
    } return item;
  });
  return arr.join('');
}

