export const calculatePerMinutes = (value, minutes) => Number((minutes * value).toFixed(2));

const surplusesMinutes = (currentMinutes, planMinutes) => currentMinutes - planMinutes;

export const calculateWithPlan = (value, currentMinutes, planMinutes) => {
  if (currentMinutes > planMinutes) {
    return Number(
      (value * surplusesMinutes(currentMinutes, planMinutes) * 1.1).toFixed(1),
    );
  }
  return 0;
};
