import isANumber from "./isANumber.js";

function percentage(sum, total) {
  let result;
  if (sum > total)
    return "Oops, could not calculate...sum is greater than total";

  if (isANumber(sum, total)) {
    result = (sum / total) * 100;
    return parseFloat(result.toFixed(2));
  } else {
    return "Inputs must be a number. Please, check the inputs to see if they are in the right format.";
  }
}

export default percentage;
