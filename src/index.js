
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }

  let result = [];

  matrix.forEach((el, index) => {
      if (index % 2) {
          el.reverse();
      }

      result.push(el);
  });

  return result.flat();
}
