function letterGrade(value) {
  if (value >= 96) {
    return { letter: "A+", description: "Elite" };
  } else if (value >= 90 && value <= 95.99) {
    return { letter: "A", description: "Great" };
  } else if (value >= 86 && value <= 89.99) {
    return { letter: "B+", description: "Good" };
  } else if (value >= 80 && value <= 85.99) {
    return { letter: "B", description: "Above Average" };
  } else if (value >= 70 && value <= 79.99) {
    return { letter: "C", description: "Average" };
  } else if (value >= 60 && value <= 69.99) {
    return { letter: "D", description: "Below Average" };
  } else if (value <= 59.99) {
    return { letter: "F", description: "Not Good Enough" };
  } else {
    return {
      letter: "N/A",
      description: "Oops, something went wrong..could not calculate grade",
    };
  }
}

export default letterGrade;
