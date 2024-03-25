function teamLetterGrade(rank) {
  if (rank <= 3) {
    return { letter: "A+", description: "Elite" };
  } else if (rank >= 4 && rank <= 6) {
    return { letter: "A", description: "Great" };
  } else if (rank >= 7 && rank <= 9) {
    return { letter: "B+", description: "Good" };
  } else if (rank >= 10 && rank <= 12) {
    return { letter: "B", description: "Above Average" };
  } else if (rank >= 13 && rank <= 20) {
    return { letter: "C", description: "Average" };
  } else if (rank >= 21 && rank <= 26) {
    return { letter: "D", description: "Below Average" };
  } else if (rank >= 27) {
    return { letter: "F", description: "Not Good Enough" };
  } else {
    return {
      letter: "N/A",
      description: "Oops, something went wrong..could not calculate grade",
    };
  }
}

export default teamLetterGrade;
