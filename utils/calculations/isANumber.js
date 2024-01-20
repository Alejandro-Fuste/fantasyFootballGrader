function isANumber(input1, input2) {
  if (typeof input1 !== "number" || typeof input2 !== "number") {
    return false;
  } else {
    return true;
  }
}

module.exports = isANumber;
