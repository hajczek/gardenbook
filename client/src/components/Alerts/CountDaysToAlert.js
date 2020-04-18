export default function daysToAlert(date) {
  let date1 = new Date();
  let date2 = new Date(date);

  // To calculate the time difference of two dates
  let Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  return Difference_In_Days.toFixed();
}
