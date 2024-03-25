import isANumber from "./isANumber";

function percentile(total, rank) {
  let percentile;

  if (isANumber(total, rank)) {
    percentile = ((total - rank) / total) * 100;
    return Math.round(percentile);
  } else {
    return "Inputs must be a number. Please, check the inputs to see if they are in the right format.";
  }
}

export default percentile;
