function formatName(name) {
  // Split the name into parts
  const parts = name.split(" ");

  // Check if the last part is a suffix (e.g., 'II', 'III', 'Jr.', 'Sr.')
  const suffixes = ["II", "III", "Jr.", "Sr."];
  const lastPart = parts[parts.length - 1];
  if (suffixes.includes(lastPart)) {
    // Remove the suffix
    parts.pop();
  }

  // Return the modified name
  // return parts.join(" ");
}

export default formatName;
