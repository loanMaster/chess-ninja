export const calculateScore = (
  totalQuestions: number,
  errors: number,
  duration: number,
  optimalTime?: number
) => {
  const percentageCorrect = 1.0 - errors / totalQuestions;

  const maxScore = percentageCorrect * 100;
  const time_divisor = optimalTime || 12_000;
  const timePenalty = Math.min(3, duration / time_divisor);

  return Math.floor(Math.max(0, maxScore - 10 * timePenalty) * 10) / 10;
};
