export const calculatePerMinutes = (value, minutes) => {
  return minutes * value;
};

const surplusesMinutes = (currentMinutes, planMinutes) =>
  currentMinutes - planMinutes;

export const calculateWithPlan = (value, currentMinutes, planMinutes) => {
  if (currentMinutes > planMinutes) {
    return Number(
      (value * surplusesMinutes(currentMinutes, planMinutes) * 1.1).toFixed(2)
    );
  }
  return 0;
};


