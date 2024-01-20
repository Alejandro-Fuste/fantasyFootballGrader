function sumCriteriaPoints(array) {
  let sum = array.reduce((a, b) => a + b);
  return sum;
}

module.exports = sumCriteriaPoints;
