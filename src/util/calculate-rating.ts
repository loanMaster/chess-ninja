export const mapScoreToRating = (score: number) => {
  if (score > 90) {
    return 5;
  } else if (score > 80) {
    return 4;
  } else if (score > 70) {
    return 3;
  } else if (score > 50) {
    return 2;
  } else if (score > 30) {
    return 1;
  }
  return 0;
};
