function calcAverageCalories(days) {
  let totalCalories = 0;

  for (const calorie of days) {
    totalCalories += calorie.calories;
  }
  return totalCalories / days.length;
}
