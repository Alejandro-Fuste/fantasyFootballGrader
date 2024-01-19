function isANumber(input1, input2) {
  if (typeof input1 !== "number" || typeof input2 !== "number") {
    return false;
  } else {
    return true;
  }
}

function percentile(total, rank) {
  let percentile;

  if (isANumber(total, rank)) {
    console.log(isANumber(total, rank));
    percentile = ((total - rank) / total) * 100;
    return Math.round(percentile);
  } else {
    return "Inputs must be a number. Please, check the inputs to see if they are in the right format.";
  }
}

module.exports = percentile;
